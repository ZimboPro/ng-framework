import { FormGroup, AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
export interface IControls {
    [key: string]: AbstractControl;
}
export declare class LibFormGroup<T extends IControls> extends FormGroup {
    constructor(controls: IControls, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]);
    controls: T;
    /**
     * Returns a  list of FormControls that are invalid and enabled within the FormGroup.
     * The FormControls of sub FormGroups and FormArrays are not returned.
     */
    invalidControls(): string[];
    /**
     * Returns a list of FormGroups and FormArrays that are invalid and enabled within the FormGroup.
     * The FormGroups and FormArrays of sub FormGroups and FormArrays are not included.
     */
    invalidFormGroups(): string[];
    /**
     * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are not included.
     */
    invalidFormGroupsAndControls(): string[];
    /**
     * Returns a list of FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormControls of sub FormGroups and FormArrays are included.
     */
    allInvalidControls(): string[];
    /**
     * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are included.
     */
    allInvalidControlsAndGroups(): string[];
    clearAllValidators(): void;
    clearAllValues(): void;
    clearValuesAndValidators(): void;
}
