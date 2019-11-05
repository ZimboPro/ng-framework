import { IControls } from './reactive';
import { LibFormControl } from './control';

export class LibControlsClass implements IControls {
    [key: string]: LibFormControl;
}

export class ControlsClass implements IControls {
    [key: string]: import("@angular/forms").AbstractControl;
}