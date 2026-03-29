import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss'],
})
export class ReceiverComponent implements OnInit {
  message!: string;

  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {
    this._sharedService.message$.subscribe({
      next: (res) => {
        this.message = res;
      },
    });
  }
}
