import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentName = 'Vivek Kumar Biswal';
  parentAge = 29;
  parentJob = 'Developer';

  changeValue(){
    this.parentName = 'Rahul'
    this.parentAge = 30;
    this.parentJob = 'Senior Developer'
  }

  messageFromChild = "";
  receiveMessage(msg: string){
    this.messageFromChild = msg;
  }
}