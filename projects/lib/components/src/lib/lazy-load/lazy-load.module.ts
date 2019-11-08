import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadComponent } from './lazy-load.component';



@NgModule({
  declarations: [LazyLoadComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LazyLoadComponent
  ]
})
export class LazyLoadModule { }

export const LAZY_CONTAINER_MODULES_MAP = new InjectionToken('LAZY_CONTAINER_MODULES_MAP');
