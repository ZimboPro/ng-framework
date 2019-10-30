import { FormControl, ValidatorFn } from '@angular/forms';

export class LibFormControl extends FormControl {
    
    validatorFn: ValidatorFn[] = [];
    appliedValidators: any;

    addValidator() {
        
    }

    addValidators() {

    }

    setReadonly() {

    }

    setEditable() {

    }

    removeValidator() {

    }

    removeValidators() {
        
    }

    clearValidators() {
        super.clearValidators();
    }

    clearAsyncValidators() {
        super.clearAsyncValidators();
    }
}