import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../../services/documentos.service';

import { Documento , IDocumento } from '../../interfaces/IDocumento';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  public idocumentos: Documento[] = [];


  constructor( private documentoService: DocumentosService ) { }

  ngOnInit(): void {

      this.getDocumentos();
  }


  public async getDocumentos() {

    await this.documentoService.getDocumentos()
              .then(
                      resp => {
                        this.idocumentos.push( ...resp.documentos );
                      })
              .catch(
                      err => {
                        console.log( err );
                      });


  };
}


