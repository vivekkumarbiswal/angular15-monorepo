import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // Data received from Parent
  @Input() name: string = ''
  @Input() age!: number ;
  @Input() job = ''

  
  // sending data from child
  @Output () sendMessage = new EventEmitter<string>();

  sendData(){
    const message = "Hello Parent - message form child"
    this.sendMessage.emit(message);
  }
}


