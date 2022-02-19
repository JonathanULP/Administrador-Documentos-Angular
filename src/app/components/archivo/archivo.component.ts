import { Component, OnInit , Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentosService } from 'src/app/services/documentos.service';
import { SafeResourceUrl, Title } from '@angular/platform-browser';
import { Documento } from 'src/app/interfaces/IDocumento';
import { MatDialog , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageUpdateComponent } from '../message-update/message-update.component';


@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent implements OnInit  {

  blob: any;
  url: SafeResourceUrl = '';
  id: string = '';
  extension = '';
  favorito : string = 'favorite_border';
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

  constructor( private documentoService: DocumentosService, private route: ActivatedRoute , private titleService: Title, private dialog : MatDialog ) {

    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.route.snapshot.paramMap.get('id'));

    this.getInfoArchivo(this.id);

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
                               err => {
                                 console.log( err );
                                 this.titleService.setTitle('ERROR');
                               }
                             )
}


async getInfoArchivo(id : string) {

  await this.documentoService.infoArchivo( id )
                        .then(
                              resp => {

                              this.documento = resp.documento;
                              console.log(this.documento);
                              this.seleccionarFav(this.documento.favorite as boolean);

                            }
                         )
                         .catch(
                           err => {

                            console.log( err );

                           }
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

async updateFav() {
  console.log(this.documento);
  this.documento.favorite = this.documento.favorite ? false : true;
  const msg = this.documento.favorite ? 'agregado' : 'quitado';
  console.log(this.documento.favorite);
  this.seleccionarFav(this.documento.favorite);
  this.documentoService.actualizarArchivo(this.documento,this.id)
                       .then(
                         resp => {
                          this.dialog.open(MessageUpdateComponent,{
                            data : msg
                          });
                         }
                       );



}
}
