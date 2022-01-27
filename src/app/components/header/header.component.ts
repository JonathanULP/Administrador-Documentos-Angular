import { Component, OnInit } from '@angular/core';

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

}
