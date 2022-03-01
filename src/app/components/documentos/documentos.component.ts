import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../../services/documentos.service';

import { Documento } from '../../interfaces/IDocumento';

import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  public idocumentos: Documento[] = [];
  public etiquetas : string[] = [];
  public msg : boolean = false;


  constructor( private documentoService: DocumentosService, private titleService:Title , private router:Router, private snackBar : MatSnackBar ) {
    this.titleService.setTitle('Mis Documentos');
  }

  ngOnInit(): void {

      this.getDocumentos();
  }

  public async getEtiquetas(documento:Documento[]) {
      let newArray = new Array();
      newArray.push('Todos');
      documento.forEach(item => {
      newArray.push( item.tag as string );
    });

    this.etiquetas = newArray.filter(function(elem, index, self){
        return index === self.indexOf(elem);
    });

  }

  public async navegarEtiqueta(etiqueta : string) {

    if(etiqueta != 'Todos') {
      this.documentoService.getDocumentosByTag(etiqueta)
      .then(
        resp => {
          this.idocumentos = [];
          this.idocumentos.push( ...resp.documentos);
        }
       )
       .catch(
         err => {
           console.log( err );
         }
        );
    }
    else{
      this.getDocumentos();
    }


  }


  public async getDocumentos() {

    await this.documentoService.getDocumentos()
              .then(
                      resp => {
                        //limpiamos el arreglo
                        this.idocumentos = [];
                        //vovlemos a llenar
                        this.idocumentos.push( ...resp.documentos );

                        //llenamos array de etiquestas
                        //ocultamos el mensaje de sin resultados

                        this.msg = this.idocumentos.length == 0 ? true : false;

                        this.getEtiquetas(this.idocumentos);

                      })
              .catch(
                    () => {
                      this.snackBar.open('Upsss! Ocurrio un error inesperado.','OK');
                    });


  };

  async onKey(event : any) {
    const filtro = event.target.value;

    if(filtro == '') {
      await this.getDocumentos();
    }
    else {

      await this.documentoService.getDocumentosFiltro(filtro)
                               .then (
                                 resp => {
                                   this.idocumentos = [];
                                   this.idocumentos.push( ...resp.documentos);
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


