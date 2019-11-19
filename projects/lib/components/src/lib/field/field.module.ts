import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { MatFormFieldModule } from "@angular/material";
import { LabelComponent } from './label/label.component';



@NgModule({
  declarations: [
    ErrorComponent,
    LabelComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    ErrorComponent,
    LabelComponent
  ]
})
export class FieldModule { }
