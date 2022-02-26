import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DocumentosService } from 'src/app/services/documentos.service';
import { Documento } from '../../interfaces/IDocumento';
import { MatDialog } from '@angular/material/dialog';
import { MessageUpdateComponent } from '../message-update/message-update.component';
import { MessageBoxComponent } from '../message-box/message-box.component';
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

  async restore() {

    await this.documentoService.restoreArchivo(this.documento._id as string)
                         .then(
                           resp => {

                            this.dialog.open(MessageUpdateComponent,{
                              data : 'restaurado'
                            });
                            setTimeout(()=>{
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

  async eliminar() {

    await this.documentoService.eliminarFisicamente(this.documento._id as string)
                               .then(
                                 () => {

                                  this.dialog.open(MessageBoxComponent,{
                                    data : 'eliminado'
                                  });

                                  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                                  this.router.navigate(['documentosPapelera']);
                                });
                                 }
                                )
                                .catch(
                                  err => {
                                    console.log(err);
                                  }
                                 )

  }

}
