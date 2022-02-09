import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentosService } from 'src/app/services/documentos.service';
import { SafeResourceUrl, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent implements OnInit {

  blob: any;
  url: SafeResourceUrl = '';
  id: string = '';
  extension = 'png';

  constructor( private documentoService: DocumentosService, private route: ActivatedRoute , private titleService: Title ) {

  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.route.snapshot.paramMap.get('id'));

    this.getArchivo();
 }


 public async getArchivo() {

  await this.documentoService.getArchivo( this.id )
                             .then(
                               resp => {

                                  this.blob = resp;

                                  let name = this.blob.type.split('.');
                                  this.extension = name[1];
                                  console.log(this.blob.type);
                                  const urlToBlob = window.URL.createObjectURL(this.blob) // get a URL for the blob
                                  this.url = urlToBlob;

                                  console.log(this.url);
                                  this.titleService.setTitle(name[0]);

                               }
                             )
                             .catch(
                               err => {
                                 console.log( err );
                                 this.titleService.setTitle('ERROR');
                               }
                             )
}
}
