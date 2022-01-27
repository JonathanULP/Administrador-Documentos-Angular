import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes , RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { PerfilComponent } from './components/perfil/perfil.component';

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
    path: 'archivo/:id',
    component: ArchivoComponent
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
