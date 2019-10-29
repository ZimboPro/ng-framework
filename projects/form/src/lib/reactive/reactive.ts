import { FormGroup, AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn, AbstractControlDirective, FormControl } from '@angular/forms'

export interface Controls {
    [key: string]: AbstractControl;
}

export class LibFormGroup<T extends Controls> extends FormGroup {
    interfaceControls: T;
    constructor(controls: {
        [key: string]: AbstractControl;
    }, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]) {
        super(controls as {
            [key: string]: AbstractControl;
        }, validatorOrOpts, asyncValidator)
        this.controls = controls as T;
        this.interfaceControls = controls as T;
    }
}
