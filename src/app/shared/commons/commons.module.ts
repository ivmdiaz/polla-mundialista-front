import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MODULES = [
  CommonModule,
  MaterialModule
]

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class CommonsModule { }
