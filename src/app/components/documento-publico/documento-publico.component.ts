import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Documento } from '../../interfaces/IDocumento';
import { DocumentosService } from '../../services/documentos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-documento-publico',
  templateUrl: './documento-publico.component.html',
  styleUrls: ['./documento-publico.component.css']
})
export class DocumentoPublicoComponent implements OnInit {

  url: SafeResourceUrl = '';

  id: string = '';

  blob: any;

  @Input() documento: Documento = {
    _id: '',
    nameDocument: '',
    created: '',
    pathDocument: '',
    description: '',
    tag: '',
    state: true,
    public: false,
    id_usuario: ''
  };


  constructor( private documentoServicio : DocumentosService , private snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }


  async descargar(){

    this.documentoServicio.descargarArchivo(this.documento._id as string)
                          .then( 
                            (resp) => {

                              this.snackBar.open('Descargando...','OK');

                              this.blob = new Blob([resp]);
    
                              var downloadURL = window.URL.createObjectURL(resp);
                              var link = document.createElement('a');
                              link.href = downloadURL;
                              link.download = this.documento.nameDocument as string;
                              link.click();
    
                            })
                           .catch( 
                             () => {
                              this.snackBar.open('Upsss! Ocurrió un error inesperado.','OK');

                             }
                            )

  }

}
