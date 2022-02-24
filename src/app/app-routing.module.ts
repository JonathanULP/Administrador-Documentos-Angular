import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes , RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DocumentosPapeleraComponent } from './components/documentos-papelera/documentos-papelera.component';
import { ERROR404Component } from './components/error404/error404.component';
import { ERROR401Component } from './components/error401/error401.component';
import { DocumentosFavoritoComponent } from './components/documentos-favorito/documentos-favorito.component';
import { DocumentosPublicosComponent } from './components/documentos-publicos/documentos-publicos.component';
import { CreateDocumentoComponent } from './components/create-documento/create-documento.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'documento',
    component: DocumentoComponent
  },
  {
    path: 'documentos',
    component: DocumentosComponent
  },
  {
    path: 'favoritos',
    component: DocumentosFavoritoComponent

  },
  {
    path: 'publicos',
    component: DocumentosPublicosComponent

  },
  {
    path: 'documentosPapelera',
    component: DocumentosPapeleraComponent
  },
  {
    path: 'archivo/:id',
    component: ArchivoComponent
  },
  {
    path: 'crearDocumento',
    component: CreateDocumentoComponent
  },
  {
    path: 'error404',
    component: ERROR404Component
  },
  {
    path: 'error401',
    component: ERROR401Component
  },
  {
    path: '**',
    component: ERROR404Component
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
