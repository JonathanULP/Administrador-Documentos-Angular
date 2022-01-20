import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../../services/documentos.service';

import { Documento } from '../../interfaces/IDocumento';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  public idocumentos: Documento[] = [];

  url: SafeResourceUrl = '';


  blob: any;
  constructor( private documentoService: DocumentosService , private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

      //this.getDocumentos();
      this.getArchivo();

  }


  public async getDocumentos() {

    await this.documentoService.getDocumentos()
              .then(
                      resp => {

                        console.log( resp.documentos );
                        this.idocumentos.push( ...resp.documentos );
                        //console.log( this.idocumentos );
                      })
              .catch(
                      err => {
                        console.log( err );
                      });


  }

  public async getArchivo() {

    //const { _id } = this.idocumentos[0];

    await this.documentoService.getArchivo( '61e7623a278444d1470b020f' )
                               .then(
                                 resp => {

                                    this.blob = resp;
                                    const urlToBlob = window.URL.createObjectURL(this.blob) // get a URL for the blob
                                    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
                                    console.log(this.url);

                                 }
                               )
                               .catch(
                                 err => {
                                   console.log( err );
                                 }
                               )
  }


}


