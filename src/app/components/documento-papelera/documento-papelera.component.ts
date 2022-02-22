import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DocumentosService } from 'src/app/services/documentos.service';
import { Documento } from '../../interfaces/IDocumento';
import { MatDialog } from '@angular/material/dialog';
import { MessageUpdateComponent } from '../message-update/message-update.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documento-papelera',
  templateUrl: './documento-papelera.component.html',
  styleUrls: ['./documento-papelera.component.css']
})
export class DocumentoPapeleraComponent implements OnInit {

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

  constructor( private documentoService : DocumentosService , private dialog : MatDialog ,private router : Router) { }

  ngOnInit(): void {
  }

  restore() {

    this.documentoService.restoreArchivo(this.documento._id as string)
                         .then(
                           resp => {

                            this.dialog.open(MessageUpdateComponent,{
                              data : 'restaurado'
                            });
                            setInterval(()=>{
                              this.router.navigate(['/documentos']);
                            },3000);
                           }
                         )
                         .catch(
                           err => {
                             console.log('Error',err);
                           }
                          )

  }

}
