import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export interface IControls {
    // [key: string]: LibFormControl;
    [key: string]: IControl;
}

export interface IControl extends AbstractControl {
}

export class LibFormGroup<T extends IControls> extends FormGroup {
    constructor(controls: T, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]) {
        super(controls as {
            [key: string]: AbstractControl;
        }, validatorOrOpts, asyncValidator)
        this.controls = controls as T;
    }

    controls: T;

    /**
     * Returns a  list of FormControls that are invalid and enabled within the FormGroup.
     * The FormControls of sub FormGroups and FormArrays are not returned. 
     */
    invalidControls(): string[] {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element instanceof FormControl && element.invalid && element.enabled) {
                    invalidControls.push(control);
                }
            }
        }
        return invalidControls;
    }
    /**
     * Returns a list of FormGroups and FormArrays that are invalid and enabled within the FormGroup.
     * The FormGroups and FormArrays of sub FormGroups and FormArrays are not included. 
     */
    invalidFormGroups(): string[] {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if ((element instanceof FormGroup || element instanceof FormArray) && element.invalid && element.enabled) {
                    invalidControls.push(control);
                }
            }
        }
        return invalidControls;
    }

    /**
     * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are not included. 
     */
    invalidFormGroupsAndControls() {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    invalidControls.push(control);
                }
            }
        }
        return invalidControls;
    }

    /**
     * Returns a list of FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormControls of sub FormGroups and FormArrays are included.
     */
    allInvalidControls() {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        const invalid = element.allInvalidControls();
                        invalidControls.push(...invalid);
                    } else {
                        invalidControls.push(control);
                    }
                }
            }
        }
        return invalidControls;
    }

    /**
     * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are included. 
     */
    allInvalidControlsAndGroups() {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        const invalid = element.allInvalidControls();
                        invalidControls.push(control);
                        invalidControls.push(...invalid);
                    } else {
                        invalidControls.push(control);
                    }
                }
            }
        }
        return invalidControls;
    }

    clearAllValidators() {
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        element.clearAllValidators();
                    } else {
                        element.clearValidators();
                    }
                }
            }
        }
    }

    clearAllValues() {
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        element.clearAllValues();
                    } else {
                        element.setValue(null);
                    }
                }
            }
        }
    }

    clearValuesAndValidators() {
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        element.clearValuesAndValidators();
                    } else {
                        element.setValue(null);
                        element.clearValidators();
                    }
                }
            }
        }
    }
}

export class LibFormArray<T extends IControl> extends FormArray {
    constructor(controls: T[], validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]) {
        super(controls, validatorOrOpts, asyncValidator)
        this.controls = controls;
    }

    atIndex(index: number): T {
        return this.controls[index] as T;
    }

    controls: T[];

    /**
     * Returns a  list of FormControls that are invalid and enabled within the FormGroup.
     * The FormControls of sub FormGroups and FormArrays are not returned. 
     */
    invalidControls(): string[] {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element instanceof FormControl && element.invalid && element.enabled) {
                    invalidControls.push(control);
                }
            }
        }
        return invalidControls;
    }
    /**
     * Returns a list of FormGroups and FormArrays that are invalid and enabled within the FormGroup.
     * The FormGroups and FormArrays of sub FormGroups and FormArrays are not included. 
     */
    invalidFormGroups(): string[] {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if ((element instanceof FormGroup || element instanceof FormArray) && element.invalid && element.enabled) {
                    invalidControls.push(control);
                }
            }
        }
        return invalidControls;
    }

    /**
     * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are not included. 
     */
    invalidFormGroupsAndControls() {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    invalidControls.push(control);
                }
            }
        }
        return invalidControls;
    }

    /**
     * Returns a list of FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormControls of sub FormGroups and FormArrays are included.
     */
    allInvalidControls() {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        const invalid = element.allInvalidControls();
                        invalidControls.push(...invalid);
                    } else {
                        invalidControls.push(control);
                    }
                }
            }
        }
        return invalidControls;
    }

    /**
     * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are included. 
     */
    allInvalidControlsAndGroups() {
        const invalidControls: string[] = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        const invalid = element.allInvalidControls();
                        invalidControls.push(control);
                        invalidControls.push(...invalid);
                    } else {
                        invalidControls.push(control);
                    }
                }
            }
        }
        return invalidControls;
    }

    clearAllValidators() {
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        element.clearAllValidators();
                    } else {
                        element.clearValidators();
                    }
                }
            }
        }
    }

    clearAllValues() {
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        element.clearAllValues();
                    } else {
                        element.setValue(null);
                    }
                }
            }
        }
    }

    clearValuesAndValidators() {
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        element.clearValuesAndValidators();
                    } else {
                        element.setValue(null);
                        element.clearValidators();
                    }
                }
            }
        }
    }
}
