import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../interfaces/IUsuario';
import { Doc, Documento, IDocumento, IDocumentos } from '../interfaces/IDocumento';

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

      return new Promise<IDocumentos>( ( resolve , reject) =>{

        this.httpClient.get<IDocumentos>(`${this.url}`,{headers})
                       .subscribe(
                         (res) => {
                          resolve( res );
                         }
                       );

      });
  };


  public getDocumentosFiltro(filtro : string) {

    const headers = {
      'Content-Type' : 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    };

      return new Promise<IDocumentos>( ( resolve , reject) =>{

        this.httpClient.get<IDocumentos>(`${this.url}/search/${filtro}`,{headers,responseType: 'json'})
                       .subscribe(
                         (res) => {
                          resolve( res );
                         }
                       );

      });
  };

  public async getDocumentosFavoritos() {

    const headers = {
      'Content-Type'  : 'application/json',
      'Authorization' : `${localStorage.getItem('token')}`
    };


    return new Promise<IDocumentos>( ( resolve , reject ) => {

      this.httpClient.get<IDocumentos>(`${this.url}/favoritos`,{headers})
                     .subscribe({
                       next : ( resp ) => {
                         resolve ( resp );
                       },
                      error : ( err ) => {
                         reject ( err );
                      }
                     })

    });

  };


  public async getDocumentosEliminados() {

    const headers = {
      'Content-Type'  : 'application/json',
      'Authorization' : `${localStorage.getItem('token')}`
    };

    return new Promise<IDocumentos>( ( resolve , reject ) => {
      this.httpClient.get<IDocumentos>(`${this.url}/eliminados`,{headers})
                     .subscribe({
                       next : ( resp ) => {
                          resolve( resp );
                       },
                       error : ( err ) => {
                         reject( err );
                       }
                     });
    });

  }

  public async getDocumentosByTag(etiqueta: string) {

    const headers = {
      'Content-Type' : 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    };



      await this.existsUsuario();
      console.log(this.iusuario._id);

      return new Promise<IDocumentos>( ( resolve , reject ) => {

        this.httpClient.get<IDocumentos>(`${this.url}?etiqueta=${etiqueta}`,{headers})
                       .subscribe({
                         next : res => {
                          resolve( res );
                        },
                        error : err => {
                          reject( err );
                        }
                       });

      });
  };


  public async getArchivo( _id: string ) {

    const headers = {
      'Content-Type' : 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    };

    return new Promise<Blob>(( resolve , reject ) => {

      this.httpClient.get(`${this.url}/${_id}`,{headers,responseType:'blob'})
                     .subscribe(
                       resp => {
                         resolve( resp );
                       }
                     )
    });

  };

  public async infoArchivo( _id: string) {

    const headers = {
      'Content-Type' : 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    };

    return new Promise<IDocumento>( ( resolve , reject ) =>{
      this.httpClient.get<IDocumento>(`${this.url}/full/${_id}`,{headers})
                     .subscribe({
                       next : ( resp ) => {
                         resolve( resp );
                       },
                       error: ( err ) => {
                         reject( err );
                       }
                     });

    });

  }


  public async actualizarArchivo( idocumento : Documento , _id: string) {

    const headers = {
      'Content-Type'  : 'application/json',
      'Authorization' : `${localStorage.getItem('token')}`
    };

    return new Promise<IDocumento>( ( resolve , reject) =>{

      this.httpClient.put<IDocumento>(`${this.url}/${_id}`,idocumento,{headers})
                     .subscribe({
                       next : ( resp ) => {
                         resolve( resp );
                       },
                       error : ( err ) => {
                         reject( err );
                       }
                     });

    });

  }

  public async restoreArchivo(id : string) {

    const headers = {
      'Content-Type'  : 'application/json',
      'Authorization' : `${localStorage.getItem('token')}`
    };

    return new Promise<IDocumento>(( resolve , reject) =>{
      this.httpClient.get<IDocumento>(`${this.url}/restore/${id}`,{headers,responseType:'json'})
                     .subscribe({
                       next: ( resp ) => {
                         resolve( resp );
                       },
                       error: ( err ) => {
                         reject( err );
                       }
                     });

    });

  }

  public async getDocumentosPublicos(){

    const headers = {
      'Content-Type'  : 'application/json',
      'Authorization' : `${localStorage.getItem('token')}`
    };

    return new Promise<IDocumentos>(( resolve , reject ) => {
      this.httpClient.get<IDocumentos>(`${this.url}/publicos`,{headers,responseType: 'json'})
                     .subscribe({
                       next : ( resp ) => {
                         resolve( resp );
                       },
                       error : ( err ) => {
                         reject( err );
                       }
                     })
    });

  }

  public async subirArchivo(documento : any) {

    const headers = {
      'Authorization' : `${localStorage.getItem('token')}`
    };

    return new Promise(( resolve , reject ) => {
      this.httpClient.post(`${this.url}`,documento,{headers})
                     .subscribe({
                       next: ( resp ) => {
                         resolve( resp );
                       },
                       error: ( err ) => {
                         reject( err );
                       }
                     })
    });

  }





  public async existsUsuario () {

    await this.usuarioService.getUsuario()
                             .then(
                                resp => {
                                      this.iusuario = resp.usuario
                                        }
                                  );

  }


}
