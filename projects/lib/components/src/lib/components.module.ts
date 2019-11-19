import { NgModule } from '@angular/core';

import { LazyLoadModule } from './lazy-load/public.api';
import { FieldModule } from './field/field.module';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class ESM implements ErrorStateMatcher {
  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return !!(control && control.enabled && control.invalid);
  }

}


@NgModule({
  declarations: [],
  imports: [
    LazyLoadModule,
    FieldModule
  ],
  exports: [
    LazyLoadModule,
    FieldModule
  ]
})
export class ComponentsModule { }
