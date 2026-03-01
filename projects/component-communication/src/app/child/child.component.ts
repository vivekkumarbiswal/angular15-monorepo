import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() user: any;

  @Output() notify = new EventEmitter<string>();

  sendMessage() {
    this.notify.emit('Hello Parent!');
  }
}


