import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter: number = 5;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getCounterStatus() {
    if (this.counter > 0) {
      return "positive";
    } else if (this.counter === 0) {
      return "neutral";
    } else {
      return "negitive"
    }
  }
}
