import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doc } from 'src/app/interfaces/IDocumento';
import { DocumentosService } from 'src/app/services/documentos.service';
import { IDocumento } from '../../interfaces/IDocumento';

@Component({
  selector: 'app-create-documento',
  templateUrl: './create-documento.component.html',
  styleUrls: ['./create-documento.component.css']
})
export class CreateDocumentoComponent implements OnInit {

  forma: FormGroup;


  selectedFile : File = {
    lastModified: 0,
    name: '',
    webkitRelativePath: '',
    size: 0,
    type: '',
    arrayBuffer: function (): Promise<ArrayBuffer> {
      throw new Error('Function not implemented.');
    },
    slice: function (start?: number, end?: number, contentType?: string): Blob {
      throw new Error('Function not implemented.');
    },
    stream: function (): ReadableStream<any> {
      throw new Error('Function not implemented.');
    },
    text: function (): Promise<string> {
      throw new Error('Function not implemented.');
    }
  };


  idocumento : Doc = {

    documento: this.selectedFile,
    created: '',
    description: '',
    tag: ''

  }
  constructor( private fb : FormBuilder , private documentoService: DocumentosService) {

    this.forma = this.crearFormulario();

  }

  ngOnInit(): void {
  }


  crearFormulario() {

    return this.forma = this.fb.group({

      documento     : ['',[Validators.required]],
      created       : ['',[Validators.required]],
      description   : ['',[Validators.required,Validators.minLength(2)]],
      tag           : ['',[Validators.required,Validators.minLength(2)]]
    });

  };

  async crear(instancia : Doc) {

 /*    let formData = new FormData();
    formData.append('documento',instancia.documento);
    formData.append('description',instancia.description as string);
    formData.append('created',instancia.created as string);
    formData.append('tag',instancia.tag as string);

    console.log(formData); */

    this.idocumento.description = instancia.description;
    this.idocumento.created = instancia.created;
    this.idocumento.tag = instancia.tag;

    console.log(this.idocumento);


    const payload = new FormData();
    payload.append('description', instancia.description as string);
    payload.append('created', instancia.created as string);
    payload.append('tag', instancia.tag as string);
    payload.append('documento', this.selectedFile);


    console.log(payload.get("description"));
    this.documentoService.subirArchivo(payload)
                         .then(
                           resp => {
                             console.log( resp );
                           }
                          )
                          .catch(
                            err => {
                              console.log( err );
                            }
                           )

  }

  onFileSelected(event :any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

}
