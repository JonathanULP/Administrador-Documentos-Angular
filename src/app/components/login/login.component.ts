import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ilogin } from '../../interfaces/Ilogin';
import { Router } from '@angular/router';

import {Title} from "@angular/platform-browser";
import { MatSnackBar } from '@angular/material/snack-bar';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  errors: boolean = false;

  public Ilogin : Ilogin = {

    email    : '',
    password : ''

  };

  constructor(private serviceLogin: LoginService, private fb: FormBuilder, private router:Router , private titleService:Title , private snackBar :MatSnackBar ) {

    this.titleService.setTitle('Bienvenidos');

    this.forma = this.crearFormulario();

   }


  ngOnInit(): void {
  }

  public async login() {

    this.Ilogin.email = this.forma.controls['email'].value;
    this.Ilogin.password = this.forma.controls['password'].value;

    await this.serviceLogin.login(this.Ilogin)
                           .then( res => {

                             this.router.navigate(['/documentos']);
                             this.errors = false;

                            })
                           .catch( () => {
                            this.errors = true;
                            this.snackBar.open('email / contraseña son incorrectos','OK');
                           });

  };


  crearFormulario () {
    return this.forma = this.fb.group({
      email    : ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password : ['',[Validators.required,Validators.minLength(6)]]
    })
  }


}
