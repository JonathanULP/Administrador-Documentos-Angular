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
    path: 'documentosPapelera',
    component: DocumentosPapeleraComponent
  },
  {
    path: 'archivo/:id',
    component: ArchivoComponent
  },
  {
    path: 'error404',
    component: ERROR404Component
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
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
