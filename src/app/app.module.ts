import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SafeUrlPipe } from './Pipes/safe-url.pipe';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { LoginComponent } from './components/login/login.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DocumentoPapeleraComponent } from './components/documento-papelera/documento-papelera.component';
import { DocumentosPapeleraComponent } from './components/documentos-papelera/documentos-papelera.component';
import { ERROR404Component } from './components/error404/error404.component';


import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ERROR401Component } from './components/error401/error401.component';
import { MessageUpdateComponent } from './components/message-update/message-update.component';
import { DocumentosFavoritoComponent } from './components/documentos-favorito/documentos-favorito.component';
import { DocumentosPublicosComponent } from './components/documentos-publicos/documentos-publicos.component';
import { CreateDocumentoComponent } from './components/create-documento/create-documento.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { AvatarModule } from 'ngx-avatar';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DocumentoPublicoComponent } from './components/documento-publico/documento-publico.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentoComponent,
    DocumentosComponent,
    ArchivoComponent,
    PerfilComponent,
    DocumentoPapeleraComponent,
    DocumentosPapeleraComponent,
    ERROR404Component,
    ERROR401Component,
    SafeUrlPipe,
    HeaderComponent,
    MessageUpdateComponent,
    DocumentosFavoritoComponent,
    DocumentosPublicosComponent,
    DocumentoPublicoComponent,
    CreateDocumentoComponent,
    MessageBoxComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxDocViewerModule,
    FormsModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    NgxDocViewerModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
