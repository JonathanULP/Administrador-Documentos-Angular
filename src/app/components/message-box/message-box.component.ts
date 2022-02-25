import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogData } from '../../interfaces/DialogData';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  mydata : DialogData = {
    estado : ''
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog ) {
    this.mydata = data;
  }

  ngOnInit(): void {
  }

  noClick() {
    this.dialog.closeAll();
  }

}
