import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DocumentosService } from '../../services/documentos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu = false;
  nombre : string = '';
  constructor( private usuarioService : UsuarioService) {
    this.toggleNavbar();
  }

  ngOnInit(): void {

    this.obtenerUser();

  }


  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  logout() {
    localStorage.removeItem('token');
  };

  async obtenerUser() {

    await this.usuarioService.getUsuario()
                       .then(
                         ( resp ) => {
                           this.nombre = resp.usuario.name as string;
                         }
                        )

  }

}
