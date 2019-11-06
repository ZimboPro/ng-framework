import { LibFormControl } from './control';
import { IControls } from './reactive';

export class LibControlsClass implements IControls {
    [key: string]: LibFormControl;
}

export class ControlsClass implements IControls {
    [key: string]: import("@angular/forms").AbstractControl;
}