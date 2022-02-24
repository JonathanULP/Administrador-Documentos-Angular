import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MessageBoxComponent } from './message-box/message-box.component';



@NgModule({
  declarations: [
    MessageBoxComponent
    ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ComponentModule { }
