import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Doc } from 'src/app/interfaces/IDocumento';
import { DocumentosService } from 'src/app/services/documentos.service';
import { MessageBoxComponent } from '../message-box/message-box.component';

@Component({
  selector: 'app-create-documento',
  templateUrl: './create-documento.component.html',
  styleUrls: ['./create-documento.component.css']
})
export class CreateDocumentoComponent implements OnInit {

  forma: FormGroup;


  selectedFile  = '';

  constructor( private fb : FormBuilder , private documentoService: DocumentosService , private dialog : MatDialog) {

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

    const payload = new FormData();
    payload.append('description', instancia.description as string);
    payload.append('created', instancia.created as string);
    payload.append('tag', instancia.tag as string);
    payload.append('documento', this.selectedFile);

    this.documentoService.subirArchivo(payload)
                         .then(
                           () => {
                             this.dialog.open(MessageBoxComponent,{
                               data : 'creado'
                             });
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
