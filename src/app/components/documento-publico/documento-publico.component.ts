import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Documento } from '../../interfaces/IDocumento';

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


  constructor() { }

  ngOnInit(): void {
  }

}
