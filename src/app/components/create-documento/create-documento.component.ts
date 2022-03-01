import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Doc } from 'src/app/interfaces/IDocumento';
import { DocumentosService } from 'src/app/services/documentos.service';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-documento',
  templateUrl: './create-documento.component.html',
  styleUrls: ['./create-documento.component.css']
})
export class CreateDocumentoComponent implements OnInit {

  forma: FormGroup;
  datepipe: DatePipe = new DatePipe('en-US')
  currentDate = new Date();

  selectedFile  = '';

  constructor( private fb : FormBuilder , private documentoService: DocumentosService , private dialog : MatDialog , private snackBar : MatSnackBar) {

    this.forma = this.crearFormulario();

  }

  ngOnInit(): void {
  }


  crearFormulario() {

    return this.forma = this.fb.group({

      created       : ['',[Validators.required]],
      documento     : ['',[Validators.required]],
      description   : ['',[Validators.required,Validators.minLength(2)]],
      tag           : ['',[Validators.required,Validators.minLength(2)]]
    });

  };

  async crear(instancia : Doc) {

    const formatDate =  this.datepipe.transform(this.currentDate,'YYYY-MM-dd');

    const payload = new FormData();
    payload.append('description', instancia.description as string);
    payload.append('created', formatDate as string);
    payload.append('tag', instancia.tag?.toLowerCase() as string);
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
                            () => {
                              this.snackBar.open('Upsss! Ocurrio un error al subir el archivo');
                            }
                           )

  }

  onFileSelected(event :any) {
    this.selectedFile = event.target.files[0];
  }

}
