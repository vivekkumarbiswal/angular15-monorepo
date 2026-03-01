import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  user = {
    name: 'Vivek',
    role: 'Angular Developer'
  };
  flag = true;

  toggle() {
    if (!this.flag) {
      this.user.name = 'Rahul'
    } else {
      this.user.name = 'Vivek'
    }
    this.flag = !this.flag;
  }
  changeName() {
    this.user.name = 'Rahul';
  }

  message = '';

  receiveMessage(data: string) {
    this.message = data;
  }
}
