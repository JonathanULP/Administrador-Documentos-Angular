import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario , Usuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private httpClient: HttpClient) { }

  private url: string = 'http://localhost:8088/api/usuarios';



  public getUsuario() {

    const headers = {
      'Content-Type' : 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    };

    return new Promise<IUsuario>( ( resolve , reject) =>{

      this.httpClient.get<IUsuario>(`${this.url}`,{headers})
                     .subscribe({
                      next :  ( resp ) => {
                        resolve( resp );
                      },
                      error : ( err ) => {
                        reject( err );
                      }
                     });

    });

  }


  public updateUsuario(iusuario: Usuario) {

    const headers = {
      'Content-Type'  : 'application/json',
      'Authorization' : `${localStorage.getItem('token')}`
    };

    return new Promise<Usuario>( (resolve , reject ) => {
      this.httpClient.put<Usuario>(`${this.url}/${iusuario._id}`,iusuario,{headers,responseType: 'json'})
                      .subscribe({
                        next: (resp) => {
                          resolve(resp)},
                          error: (err) => {
                            reject( err );
                          }
                        });
    });

  }
}
