import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../interfaces/Ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCliente: HttpClient) {

  }

  public login (ilogin: Ilogin) {

    const headers = {
      'Content-Type': 'application/json'
    }

      return new Promise( ( resolve , reject ) => {
        return this.httpCliente.post('http://localhost:8088/api/auth/login',ilogin, {headers,responseType: 'text'})
                               .subscribe(
                                 res => {
                                   localStorage.setItem('token',res);
                                   resolve(res)}
                               );
      });

  };
}
