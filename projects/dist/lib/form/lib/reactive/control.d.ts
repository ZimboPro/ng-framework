import { FormControl, ValidatorFn } from '@angular/forms';
import { ValidatorType } from '../validators/validator.type';
export declare class LibFormControl extends FormControl {
    private validators;
    private _keys;
    private _validatorsCount;
    readonly appliedValidators: string[];
    isValidatorTypeApplied(type: ValidatorType | string): boolean;
    private _convertValidatorsToArray;
    private _updateValidators;
    private _addValidatorTypes;
    private _removeValidatorType;
    addValidator(type: ValidatorType | string, validator: ValidatorFn): void;
    addValidators(validators: {
        type: ValidatorType | string;
        validator: ValidatorFn;
    }[]): void;
    setReadonly(): void;
    setEditable(): void;
    removeValidator(type: ValidatorType | string): void;
    removeValidators(types: ValidatorType[] | string[]): void;
    clearValidators(): void;
}
