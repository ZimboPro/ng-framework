import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { MatFormFieldModule } from "@angular/material";



@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    ErrorComponent,
    MatFormFieldModule
  ]
})
export class FieldModule { }
