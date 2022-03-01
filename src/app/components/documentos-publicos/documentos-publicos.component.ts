import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/interfaces/IDocumento';
import { DocumentosService } from 'src/app/services/documentos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-documentos-publicos',
  templateUrl: './documentos-publicos.component.html',
  styleUrls: ['./documentos-publicos.component.css']
})
export class DocumentosPublicosComponent implements OnInit {

  public idocumentos: Documento[] = [];

  constructor( private documentoService : DocumentosService , private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.getDocumentosPublicos();
  }

  async getDocumentosPublicos() {

    this.documentoService.getDocumentosPublicos()
                         .then(
                           resp => {
                            this.idocumentos.push( ...resp.documentos );
                           }
                          )
                          .catch(
                            err => {
                              this.snackBar.open('Upsss! Ocurrio un error inesperado','OK');
                            }
                           )

  }

}
