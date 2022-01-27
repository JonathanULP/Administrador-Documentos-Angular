import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/IUsuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario : Usuario = {
    _id       : '',
    name      : '',
    email     : '',
    password: '',
    estado    : false,
  }

  constructor( private usuarioservice: UsuarioService ) { }

  ngOnInit(): void {

    this.usuarioservice.getUsuario()
                       .then(
                         resp => {
                            this.usuario = resp.usuario;
                         }
                        )
                       .catch(
                         err => {
                          console.log('Error al cargar usuario  ',err);
                         }
                        )
  }

}
