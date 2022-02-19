import { Component, OnInit , Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../interfaces/DialogData';

@Component({
  selector: 'app-message-update',
  templateUrl: './message-update.component.html',
  styleUrls: ['./message-update.component.css']
})
export class MessageUpdateComponent implements OnInit {

mydata : DialogData = {
  estado : ''
};

constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  this.mydata = data;
  console.log(this.mydata);
}

  ngOnInit(): void {
  }

}
