import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos/documentos.component';
import { BrowserModule } from '@angular/platform-browser';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageUpdateComponent } from './message-update/message-update.component';


@NgModule({
  declarations: [
    MessageBoxComponent,
    ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ComponentModule { }
