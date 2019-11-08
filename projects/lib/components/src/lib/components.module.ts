import { NgModule } from '@angular/core';

import { LazyLoadModule } from './lazy-load/public.api';



@NgModule({
  declarations: [],
  imports: [
    LazyLoadModule
  ],
  exports: [LazyLoadModule]
})
export class ComponentsModule { }
