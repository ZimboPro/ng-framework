import { FormGroup, AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn, AbstractControlDirective, FormControl } from '@angular/forms'

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
}
