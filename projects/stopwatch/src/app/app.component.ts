import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lapTime: number = 0;
  isRunning: boolean = false;
  intervalRef: any;

  startStop() {
    this.isRunning ? this.stop() : this.start();
  }
  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.lapTime += 0.1;
    }, 100);
    console.log('Stopwatch started.');
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log('Stopwatch stopped.')
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.lapTime = 0;
    console.log('Stopwatch reset.')
  }
}
