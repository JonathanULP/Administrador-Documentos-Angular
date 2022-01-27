import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../interfaces/IUsuario';
import { IDocumento } from '../interfaces/IDocumento';


@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  url: string = 'http://localhost:8088/api/documentos';

  public iusuario: Usuario = {

    _id : '',
    name: '',
    email: '',
    password: '',
    estado: false

  };

  constructor( private httpClient: HttpClient , private usuarioService: UsuarioService) {}

  public getDocumentos() {

    const headers = {
      'Content-Type' : 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    };

      return new Promise<IDocumento>( ( resolve , reject) =>{

        this.httpClient.get<IDocumento>(`${this.url}`,{headers})
                       .subscribe(
                         (res) => {
                          resolve( res );
                         }
                       );

      });
  };

  public async getDocumentosByTag() {

    const headers = {
      'Content-Type' : 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    };

    try{

      await this.existsUsuario();
      console.log(this.iusuario._id);

      return new Promise( ( resolve , reject ) => {

        this.httpClient.get(`${this.url}?etiqueta=Motos`,{headers})
                       .subscribe(
                         res => {
                           resolve( res );
                         }
                       );

      });

    }
    catch ( err ) {

      console.log( err );

    }

  };


  public async getArchivo( _id: string ) {

    const headers = {
      'Content-Type' : 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    };

    return new Promise(( resolve , reject ) => {

      this.httpClient.get(`${this.url}/${_id}`,{headers,responseType:'blob'})
                     .subscribe(
                       resp => {
                         resolve( resp );
                       }
                     )
    });

  };





  public async existsUsuario () {

    await this.usuarioService.getUsuario()
                             .then(
                                resp => {
                                      this.iusuario = resp.usuario
                                        }
                                  );

  }


}
