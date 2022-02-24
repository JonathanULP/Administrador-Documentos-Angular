import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/interfaces/IDocumento';
import { DocumentosService } from '../../services/documentos.service';

@Component({
  selector: 'app-documentos-favorito',
  templateUrl: './documentos-favorito.component.html',
  styleUrls: ['./documentos-favorito.component.css']
})
export class DocumentosFavoritoComponent implements OnInit {

  public idocumentos: Documento[] = [];
  constructor( private documentoService: DocumentosService) { }

  ngOnInit(): void {
    this.getFavoritos();
  }

  public async getFavoritos() {

    await this.documentoService.getDocumentosFavoritos()
                         .then(
                           resp => {
                            this.idocumentos.push( ...resp.documentos );
                           }
                          )
                          .catch(
                            err => {
                              console.log( err );
                            }
                           )

  };

}
