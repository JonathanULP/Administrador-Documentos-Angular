import { Component, OnInit } from '@angular/core';

import { DocumentosService } from '../../services/documentos.service';

import { Documento } from '../../interfaces/IDocumento';

import {Title} from "@angular/platform-browser";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-documentos-papelera',
  templateUrl: './documentos-papelera.component.html',
  styleUrls: ['./documentos-papelera.component.css']
})
export class DocumentosPapeleraComponent implements OnInit {

  public idocumentos: Documento[] = [];
  public msg : boolean = false;


  constructor( private documentoService: DocumentosService, private titleService:Title , private snackBar : MatSnackBar ) {
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
                                 }
                               )
                               .catch(
                                () => {
                                  this.snackBar.open('Upsss! Ocurrio un error inesperado.','OK');
                                }
                               )
  }

  async onKey(event : any) {
    const filtro = event.target.value;


    if(filtro == '') {
      await this.getDocumentosEliminados();
    }
    else {

      await this.documentoService.getDocumentosFiltro(filtro)
                               .then (
                                 resp => {
                                   this.idocumentos = [];
                                   this.idocumentos.push( ...resp.documentos);
                                   this.msg = false;

                                   if (this.idocumentos.length == 0) {
                                     this.msg = true;
                                   }
                                 }
                               )
                               .catch (
                                () => {
                                  this.snackBar.open('Upsss! Ocurrio un error inesperado.','OK');
                                }
                               )

    };


  };

}
