import { IControls, LibFormControl } from "../../public-api";

export class ControlsClass implements IControls {
    [key: string]: LibFormControl;
}
