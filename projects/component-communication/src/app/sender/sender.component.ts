import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss'],
})
export class SenderComponent {
  constructor(private _sharedService: SharedService) {}

  sendData() {
    this._sharedService.sendMessage('Hellow this is sender');
  }
}
