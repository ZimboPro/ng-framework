import { IControls } from '../reactive/reactive';
import { LibFormControl } from '../reactive/control';

export class ControlsClass implements IControls {
    [key: string]: LibFormControl;
}
