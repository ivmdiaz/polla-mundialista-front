import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const MODULES = [
  CommonModule,
  MaterialModule
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: MODULES,
  exports: [MODULES, HeaderComponent, FooterComponent]
})
export class CommonsModule { }
