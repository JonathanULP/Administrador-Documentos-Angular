import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentosService } from 'src/app/services/documentos.service';
import { SafeResourceUrl, Title } from '@angular/platform-browser';
import { Documento } from 'src/app/interfaces/IDocumento';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent implements OnInit  {

  blob: any;
  blob1: any;
  url: SafeResourceUrl = '';
  id: string = '';
  extension = '';
  favorito : string = 'favorite_border';
  publico : string = 'add_circle';
  state : string = 'delete'
  esImagen : boolean = true;

  documento : Documento = {
    _id: '',
    nameDocument: '',
    created: '',
    pathDocument: '',
    description: '',
    tag: '',
    state: false,
    favorite:false,
    public: false,
    id_usuario: ''
  }

  id_user_current : string = '';
  isMyFile : boolean = false;

  constructor( private documentoService: DocumentosService, private usuarioService: UsuarioService ,private route: ActivatedRoute , private titleService: Title, private dialog : MatDialog ,private _snackBar: MatSnackBar ) {

    this.id = this.route.snapshot.paramMap.get('id') as string;

    this.getInfoArchivo(this.id);
    this.getUsuario();

  }

  ngOnInit() {

    this.getArchivo();

 }


 public async getArchivo() {

  await this.documentoService.getArchivo( this.id )
                             .then(
                               resp => {

                                  this.blob = resp;

                                  let name = this.blob.type.split('/');
                                  this.extension = name[1];
                                  const urlToBlob = window.URL.createObjectURL(this.blob) // get a URL for the blob
                                  this.url = urlToBlob;

                                  this.isImagen(this.extension);

                                  this.titleService.setTitle(name[0]);

                               }
                             )
                             .catch(
                               () => {
                                 this.openSnackBar('Upsss! Ocurrio un error inesperado.');
                                 this.titleService.setTitle('ERROR');
                               }
                             )
}


async getInfoArchivo(id : string) {

  await this.documentoService.infoArchivo( id )
                        .then(
                              resp => {

                              this.documento = resp.documento;
                              this.seleccionarFav(this.documento.favorite as boolean);
                              this.seleccionarPublic(this.documento.public as boolean);
                              this.moverAPapelera(this.documento.state as boolean);

                            }
                         )
                         .catch(
                           () => {
                            this.openSnackBar('Upsss! Ocurrio un error inesperado.');                           }
                          )

}

async isImagen(extension : string) {


  const ext = ['jpg','png','jpeg'];
  const result = ext.indexOf(extension);
  this.esImagen = result != -1 ? true : false;
  }


async seleccionarFav(favorito : boolean) {
  this.favorito = favorito ? 'favorite' : 'favorite_border';
}

async seleccionarPublic(publico : boolean) {
  this.publico = publico ? 'add_circle' : 'add_circle_outline';
}

async moverAPapelera(state : boolean) {
  this.state = state ? 'delete_outline' : 'delete';
}

async updateFav() {

  this.documento.favorite = this.documento.favorite ? false : true;
  const msg = this.documento.favorite ? 'Agregado a Favoritos' : 'Eliminado de Favoritos';

  this.seleccionarFav(this.documento.favorite);
  this.documentoService.actualizarArchivo(this.documento,this.id)
                       .then(
                         () => {
                          this.openSnackBar(msg);
                         }
                       )
                       .catch(
                        () => {
                          this.openSnackBar('Error al actualizar documento');
                        }
                       );



}

async updatePublic() {

  this.documento.public = this.documento.public ? false : true;
  const msg = this.documento.public ? 'Agregado a Publicos' : 'Quitado de Publicos';

  this.seleccionarPublic(this.documento.public);
  this.documentoService.actualizarArchivo(this.documento,this.id)
                                          .then(
                                            () => {
                                              this.openSnackBar(msg);
                                              /* this.dialog.open(MessageUpdateComponent,{
                                                data : msg
                                              }); */
                                            }
                                          )
                                          .catch(
                                            () => {
                                              this.openSnackBar('Error al actualizar documento');
                                            }
                                           )

}

async updateState() {

  this.documento.state = this.documento.state ? false : true;
  const msg = this.documento.state ? 'Documento restaurado' : 'Documento eliminado';

  this.moverAPapelera(this.documento.state);
  this.documentoService.actualizarArchivo(this.documento,this.id)
                                        .then(
                                          () => {
                                            this.openSnackBar(msg);
                                          }
                                        )
                                        .catch(
                                          () => {
                                            this.openSnackBar('Error al actualizar documento');
                                          }
                                         )


}

async descargar() {

  this.documentoService.descargarArchivo( this.id )
                       .then(
                         (resp) => {
                          this.blob1 = new Blob([resp]);

                          var downloadURL = window.URL.createObjectURL(resp);
                          var link = document.createElement('a');
                          link.href = downloadURL;
                          link.download = this.documento.nameDocument as string;
                          link.click();

                         }
                        )
                        .catch(
                          () => {
                            this.openSnackBar('Error al actualizar documento');
                          }
                         )

}

async getUsuario() {

  await this.usuarioService.getUsuario()
                            .then(
                              resp => {
                                this.id_user_current = resp.usuario._id as string;
                                this.isMyFile = this.id_user_current == this.documento.id_usuario ? true : false ;
                              }
                             )
                             .catch(
                               () => {
                                this.openSnackBar('Error al obtener usuario');
                               }
                              )

}

openSnackBar(msg: string) {
  this._snackBar.open(msg,'OK');
}

}
