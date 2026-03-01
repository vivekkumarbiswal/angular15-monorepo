import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Vivek';
  today = new Date();
  price = 2500;
  percentage = 0.75;

  items = ['Apple', 'Banana', 'Msngo', 'Orange'];
  searchText = '';

  // Investment
  investments = [
    {name: 'Plan A', minInvestment: 5000 },
    {name: 'Plan B', minInvestment: 100000 },
    {name: 'Plan C', minInvestment: 1000000 },
    {name: 'Plan D', minInvestment: 25000000 }
  ];
}
