import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { SafeUrlPipe } from './Pipes/safe-url.pipe';
import { DocumentoComponent } from './components/documento/documento.component';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentoComponent,
    DocumentosComponent,
    ArchivoComponent,
    PerfilComponent,
    SafeUrlPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxDocViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
