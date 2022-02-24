import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/IUsuario';
import { UsuarioService } from '../../services/usuario.service';

import {MatDialog} from '@angular/material/dialog';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Doc } from 'src/app/interfaces/IDocumento';





@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario : Usuario = {
    _id       : '',
    name      : '',
    email     : '',
    password  : '',
    estado    : false,
  }

  forma: FormGroup;

  constructor( private usuarioservice: UsuarioService,public dialog: MatDialog , private fb: FormBuilder , private TitleService : Title ,private router : Router) {

    this.TitleService.setTitle('Mi Perfil');

    console.log(this.usuario);
    this.cargarFormulario();
    this.forma = this.crearFormulario();
    this.getUsuario();

  }

  ngOnInit(): void {

   this.getUsuario();

  };

  async getUsuario() {

    await this.usuarioservice.getUsuario()
                       .then(
                         resp => {
                            this.usuario._id = resp.usuario._id;
                            this.usuario.name = resp.usuario.name;
                            this.usuario.email = resp.usuario.email;
                            this.usuario.estado = resp.usuario.estado;

                            console.log(this.usuario);

                         }
                        )
                       .catch(
                         err => {
                          console.log('Error al cargar usuario  ',err);
                          if( err.status == 401) {
                            this.router.navigate(['/login']);
                          }

                         }
                        );

  }

  async actualizar(instance: Usuario) {

    this.usuario.email = instance.email;
    this.usuario.estado = instance.estado;
    this.usuario.name = instance.name;
    this.usuario.password = instance.password;

    console.log(instance,this.usuario);

    console.log(this.usuario);

    console.log(this.usuario);

    this.usuarioservice.updateUsuario(this.usuario)
                        .then( resp => {
                            this.openDialog();
                            console.log('Usuario actualizado' , resp);
                        })
                        .catch( err => {
                          console.log(err);
                        })

  };

  openDialog() {
    this.dialog.open(MessageBoxComponent);
  }

  crearFormulario() {

    return this.forma = this.fb.group({

      name     : ['',[Validators.required,Validators.pattern('[A-Za-z0-9.]{3,}$')]],
      email    : ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      estado   : [true,[Validators.required]]
    });

  };

  async cargarFormulario() {

    await this.getUsuario();
    await this.forma.setValue({
      name: this.usuario.name,
      email: this.usuario.email,
      password: '',
      estado : true
    })

  }

}
