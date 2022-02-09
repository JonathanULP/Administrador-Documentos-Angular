import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos/documentos.component';
import { BrowserModule } from '@angular/platform-browser';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ERROR401Component } from './error401/error401.component';


@NgModule({
  declarations: [
    MessageBoxComponent,
    ERROR401Component
    ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ComponentModule { }
