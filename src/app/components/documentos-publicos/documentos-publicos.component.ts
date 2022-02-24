import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/interfaces/IDocumento';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-documentos-publicos',
  templateUrl: './documentos-publicos.component.html',
  styleUrls: ['./documentos-publicos.component.css']
})
export class DocumentosPublicosComponent implements OnInit {

  public idocumentos: Documento[] = [];

  constructor( private documentoService : DocumentosService) { }

  ngOnInit(): void {
    this.getDocumentosPublicos();
  }

  async getDocumentosPublicos() {

    this.documentoService.getDocumentosPublicos()
                         .then(
                           resp => {
                            this.idocumentos.push( ...resp.documentos );
                            console.log(this.idocumentos);
                           }
                          )
                          .catch(
                            err => {
                              console.log( err );
                            }
                           )

  }

}
