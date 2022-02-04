import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  noClick() {
    this.dialog.closeAll();
  }

}
