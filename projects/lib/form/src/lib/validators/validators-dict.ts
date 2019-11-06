import { Validators } from '@angular/forms';

import { ValidatorType } from './validator.type';

export const ValidatorsDict = {
    [ValidatorType.required]: Validators.required,
    [ValidatorType.maxLength]: Validators.maxLength,
    [ValidatorType.minLength]: Validators.minLength,
    [ValidatorType.max]: Validators.max,
    [ValidatorType.min]: Validators.min,
    [ValidatorType.email]: Validators.email,
    [ValidatorType.pattern]: Validators.pattern,
}