import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  // Data received from Parent
  @Input() name: string = '';
  @Input() age!: number;
  @Input() job = '';
  @Input() jobStatus = '';

  // sending data from child
  @Output() sendMessage = new EventEmitter<string>();
  @Output() sendJobStatus = new EventEmitter<string>();

  ngOnInit(): void {
    this.sendJobStatus.emit('Going to get one Job today');
  }

  // sendJobStatusFun() {
  //   const message = 'Going to get One Job Soon';
  //   this.sendJobStatus.emit(message);
  // }

  sendData() {
    const message = 'Hello Parent - message form child';
    this.sendMessage.emit(message);
  }
}
