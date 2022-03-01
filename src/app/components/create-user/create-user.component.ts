import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/IUsuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  forma : FormGroup;

  contraseña : string = '';

  msg : boolean = true;

  iusuario : Usuario = {
    _id: '',
    name : '',
    email: '',
    password: '',
    estado: true
  }
  
  constructor( private fb : FormBuilder , private usuarioService : UsuarioService , private router : Router , private snackBar : MatSnackBar) {

      this.forma = this.crearFormulario();

   }

  ngOnInit(): void {
  }


  crearFormulario() {

    return this.forma = this.fb.group({

      name         : ['',[Validators.required]],
      email        : ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password     : ['',[Validators.required,Validators.minLength(6)]],
      confpassword : ['',[Validators.required,Validators.minLength(6)]]
    });

  }

  async crearUsuario(instance : Usuario){

    this.iusuario.email = instance.email;
    this.iusuario.name = instance.name;
    this.iusuario.password = instance.password;

    if( this.msg ) {
     
      await this.usuarioService.crearUsuario(this.iusuario)
                               .then( 
                                 () => {

                                  this.snackBar.open('Usuario creado exitosamente','OK');

                                  setInterval( () =>{
                                    this.router.navigate(['/login']);
                                  },2000);

                                 }
                                )
                                .catch( 
                                  () => {
                                    this.snackBar.open('Upss! Ocurrio un error al crear el usuario','OK');
                                  }
                                 )

    }
    else{
      this.snackBar.open('Las contraseñas no coinciden','OK');
    }


  }

  onKeyPass(event : any) {
    this.iusuario.password = event.target.value;
  }

  onKey(event : any) {
    this.contraseña = event.target.value;

    if(this.contraseña == this.iusuario.password)
    {
      this.msg = true;
    }
    else {
      this.msg = false;
    }
  }

}
