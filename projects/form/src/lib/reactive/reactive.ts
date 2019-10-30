import { FormGroup, AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn, AbstractControlDirective, FormControl, FormArray } from '@angular/forms'

export interface IControls {
    [key: string]: AbstractControl;
}

export class LibFormGroup<T extends IControls> extends FormGroup {
    constructor(controls: IControls, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]) {
        super(controls as {
            [key: string]: AbstractControl;
        }, validatorOrOpts, asyncValidator)
        this.controls = controls as T;
    }

    controls: T;

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
}
