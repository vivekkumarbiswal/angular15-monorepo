import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  intervalSub!: Subscription;
  // ngOnInit() {
  //   this.subscription$ = interval(1000)
  //     .pipe(map((val) => val * 2))
  //     .subscribe({
  //       next: (val) => {
  //         console.log(val);
  //       },
  //     });
  // }
  // ngOnDestroy() {
  //   this.subscription$.unsubscribe();
  // }
  // unSub!: Subscription;
  // ngOnInit() {
  //   const observable$ = new Observable<number>((observer) => {
  //     let count = 0;
  //     const id = setInterval(() => {
  //       observer.next(count++);
  //     }, 1000);
  //     setTimeout(() => {
  //       observer.complete();
  //       clearInterval(id);
  //     }, 5000);
  //   });
  //   this.unSub = observable$.subscribe({
  //     next: (val) => console.log(val),
  //     complete: () => console.log('Complete'),
  //   });
  // }
  // ngOnDestroy() {
  //   this.unSub.unsubscribe();
  // }

  ngOnInit() {
    this.intervalSub = this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('COMPLETED!'),
      error: (err) => console.log(err),
    });
  }
  customInterval$ = new Observable((observer) => {
    let timeExecutered = 1;
    const interval = setInterval(() => {
      if (timeExecutered > 3) {
        clearInterval(interval);
        observer.complete();
        return;
      }
      console.log('Emitting new value...');
      observer.next({ message: 'New value' });
      timeExecutered++;
    }, 1000);
  });
  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }
}
