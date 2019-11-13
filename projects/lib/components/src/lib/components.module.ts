import { NgModule, Type } from '@angular/core';

import { LazyLoadModule } from './lazy-load/public.api';
import { FieldModule } from './field/field.module';

const Components: (any[] | Type<any>)[] = [
  LazyLoadModule,
  FieldModule
]

@NgModule({
  declarations: [],
  imports: Components,
  exports: Components
})
export class ComponentsModule { }
