import { Type } from "@angular/core";

export type LazyModuleType = Type<any> & { rootComponent: Type<any> };