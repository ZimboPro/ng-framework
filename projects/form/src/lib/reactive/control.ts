import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { ValidatorType } from '../validators/validator.type';

export class LibFormControl extends FormControl {
    private validators: {
        [key: string]: ValidatorFn;
    } = {};

    private _convertValidatorsToArray() {
        const validators = [];
        for (const validator in this.validators) {
            if (this.validators.hasOwnProperty(validator)) {
                const element = this.validators[validator];
                validators.push(element);
            }
        }
        return validators;
    }

    private _updateValidators() {
        const validators = this._convertValidatorsToArray();
        this.setValidators(validators);
        this.updateValueAndValidity();
    }

    addValidator(type: ValidatorType | string, validator: ValidatorFn) {
        this.validators[type] = validator;
        this._updateValidators();
    }
    
    addValidators(validators: {type: ValidatorType | string, validator: ValidatorFn}[]) {
        for (const validator of validators) {
            this.validators[validator.type] = validator.validator;
        }
        this._updateValidators();
    }

    setReadonly() {

    }

    setEditable() {

    }

    removeValidator(type: ValidatorType | string) {
        delete this.validators[type];
        this._updateValidators();
    }

    removeValidators(types: ValidatorType[] | string[]) {
        for (const type of types) {
            delete this.validators[type];
        }
        this._updateValidators();
    }

    clearValidators() {
        this.validators = {};
        super.clearValidators();
    }

    clearAsyncValidators() {
        super.clearAsyncValidators();
    }
}