import { NgModule, Type } from '@angular/core';

import { LazyLoadModule } from './lazy-load/public.api';

const Components: (any[] | Type<any>)[] = [
  LazyLoadModule
]

@NgModule({
  declarations: [],
  imports: Components,
  exports: Components
})
export class ComponentsModule { }
