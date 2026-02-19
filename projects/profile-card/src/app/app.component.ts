import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Vivek Kumar Biswal';
  age: number = 29;
  description: string = 'An Angular developer';
}
