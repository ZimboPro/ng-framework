import { ValidatorType } from './validator.type';
import { Validators } from '@angular/forms';
export declare const ValidatorsDict: {
    [ValidatorType.required]: typeof Validators.required;
    [ValidatorType.maxLength]: typeof Validators.maxLength;
    [ValidatorType.minLength]: typeof Validators.minLength;
    [ValidatorType.max]: typeof Validators.max;
    [ValidatorType.min]: typeof Validators.min;
    [ValidatorType.email]: typeof Validators.email;
    [ValidatorType.pattern]: typeof Validators.pattern;
};
