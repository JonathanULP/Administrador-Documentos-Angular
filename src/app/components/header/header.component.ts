import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../../services/documentos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu = false;
  constructor() {
    this.toggleNavbar();
  }

  ngOnInit(): void {
  }


  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  logout() {
    localStorage.removeItem('token');
  };

}
