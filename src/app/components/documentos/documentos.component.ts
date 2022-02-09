import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../../services/documentos.service';

import { Documento } from '../../interfaces/IDocumento';

import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  public idocumentos: Documento[] = [];
  public msg : boolean = false;


  constructor( private documentoService: DocumentosService, private titleService:Title ) {
    this.titleService.setTitle('Mis Documentos');
  }

  ngOnInit(): void {

      this.getDocumentos();
  }


  public async getDocumentos() {

    await this.documentoService.getDocumentos()
              .then(
                      resp => {
                        //limpiamos el arreglo
                        this.idocumentos = [];
                        //vovlemos a llenar
                        this.idocumentos.push( ...resp.documentos );
                        //ocultamos el mensaje de sin resultados

                        this.msg = this.idocumentos.length == 0 ? true : false;
                      })
              .catch(
                      err => {
                        console.log( err );
                      });


  };

  async onKey(event : any) {
    const filtro = event.target.value;
    console.log(filtro);

    if(filtro == '') {
      await this.getDocumentos();
    }
    else {

      await this.documentoService.getDocumentosFiltro(filtro)
                               .then (
                                 resp => {
                                   this.idocumentos = [];
                                   this.idocumentos.push( ...resp.documentos);
                                   console.log(this.idocumentos);
                                   this.msg = false;

                                   if (this.idocumentos.length == 0) {
                                     console.log('No se encontraron resultados');
                                     this.msg = true;
                                   }
                                 }
                               )
                               .catch (
                                 err => {
                                   console.log( err );
                                 }
                               )

    };


  };



}


