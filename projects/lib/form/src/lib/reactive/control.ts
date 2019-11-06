import { FormControl, ValidatorFn } from '@angular/forms';

import { ValidatorType } from '../validators/validator.type';

export class LibFormControl extends FormControl {
    private validators: {
        [key: string]: ValidatorFn;
    } = {};

    private _keys: string[] = [];
    private _validatorsCount = 0;
    get appliedValidators(): string[] {
        return this._keys;
    }

    isValidatorTypeApplied(type: ValidatorType | string) {
        return this._keys.indexOf(type) !== -1;
    }

    private _convertValidatorsToArray(): ValidatorFn[] {
        const validators:ValidatorFn[] = [];
        for (const validator in this.validators) {
            if (this.validators.hasOwnProperty(validator)) {
                const element = this.validators[validator];
                validators.push(element);
            }
        }
        return validators;
    }

    private _updateValidators(added: boolean = false) {
        if (added || this._validatorsCount !== this._keys.length) {
            const validators = this._convertValidatorsToArray();
            this.setValidators(validators);
            this.updateValueAndValidity();
        }
    }

    private _addValidatorTypes(type: ValidatorType | string) {
        if (this._keys.indexOf(type) === -1) {
            this._keys.push(type);
            this._validatorsCount = this._keys.length;
        }
    }

    private _removeValidatorType(type: ValidatorType | string) {
        this._keys = this._keys.filter(_type => _type !== type);
    }

    addValidator(type: ValidatorType | string, validator: ValidatorFn) {
        this.validators[type] = validator;
        this._addValidatorTypes(type);
        this._updateValidators(true);
    }
    
    addValidators(validators: {type: ValidatorType | string, validator: ValidatorFn}[]) {
        for (const validator of validators) {
            this.validators[validator.type] = validator.validator;
            this._addValidatorTypes(validator.type);
        }
        this._updateValidators(true);
    }

    setReadonly() {

    }

    setEditable() {

    }

    removeValidator(type: ValidatorType | string) {
        delete this.validators[type];
        this._removeValidatorType(type);
        this._updateValidators();
    }

    removeValidators(types: ValidatorType[] | string[]) {
        for (const type of types) {
            delete this.validators[type];
            this._removeValidatorType(type);
        }
        this._updateValidators();
    }

    clearValidators() {
        this.validators = {};
        super.clearValidators();
    }
}