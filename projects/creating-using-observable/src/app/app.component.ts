import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription$!: Subscription;
  ngOnInit() {
    this.subscription$ = interval(1000).subscribe({
      next: (val) => {
        console.log(val);
      },
    });
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
