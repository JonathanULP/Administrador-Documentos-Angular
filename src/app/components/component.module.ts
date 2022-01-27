import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos/documentos.component';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentoComponent } from './documento/documento.component';
import { ArchivoComponent } from './archivo/archivo.component';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ComponentModule { }
