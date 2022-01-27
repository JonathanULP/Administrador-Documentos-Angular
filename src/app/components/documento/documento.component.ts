import { Component, OnInit , Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DocumentosService } from 'src/app/services/documentos.service';
import { IDocumento , Documento } from '../../interfaces/IDocumento';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

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

  constructor( private documentoService: DocumentosService ) {

  }

  ngOnInit(): void {
    this.id = this.documento._id as string;
    this.documentoService.getArchivo(this.id)
                         .then(
                           resp => {
                            this.blob = resp;

                            const urlToBlob = window.URL.createObjectURL(this.blob) // get a URL for the blob
                            this.url = urlToBlob;
                            console.log('id' , this.id);
                           }

                          )


  }

}
