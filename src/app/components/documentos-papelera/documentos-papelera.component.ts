import { Component, OnInit } from '@angular/core';

import { DocumentosService } from '../../services/documentos.service';

import { Documento } from '../../interfaces/IDocumento';

import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-documentos-papelera',
  templateUrl: './documentos-papelera.component.html',
  styleUrls: ['./documentos-papelera.component.css']
})
export class DocumentosPapeleraComponent implements OnInit {

  public idocumentos: Documento[] = [];
  public msg : boolean = false;


  constructor( private documentoService: DocumentosService, private titleService:Title ) {
    this.titleService.setTitle("Papelera");
  }

  ngOnInit(): void {
    this.getDocumentosEliminados();
  }


  async getDocumentosEliminados() {

    await this.documentoService.getDocumentosEliminados()
                               .then(
                                 resp => {
                                  this.idocumentos = [];
                                  this.idocumentos.push( ...resp.documentos);
                                  console.log(this.idocumentos);
                                 }
                               )
                               .catch(
                                 err => {
                                   console.log( err );
                                 }
                               )
  }

  async onKey(event : any) {
    const filtro = event.target.value;
    console.log(filtro);

    if(filtro == '') {
      await this.getDocumentosEliminados();
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
