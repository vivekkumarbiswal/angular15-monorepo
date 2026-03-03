import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  template:`
  <form #myForm = "ngForm" (ngSubmit)="onSubmit(myForm)">
    <div>
      <label for="name">Name: </label>
      <input 
        type="text"
        name="name"
        [(ngModel)] = "user"
        required
        autocomplete="off"
        >
    </div>
    <div>
      <label for="email">Email: </label>
      <input 
        type="email"
        name="email"
        [(ngModel)] = "email"
        required
        autocomplete="off"
        >
    </div>
    <div>
      <label for="country">Country: </label>
      <select name="select" [(ngModel)]="selectedCountry">
        <option *ngFor="let country of countries" [value]="country.value">{{ country.name }}</option>
      </select>
    </div>
    <div>
      <label for="city">City: </label>
      <select name="city" [(ngModel)] = "city">
        <option *ngFor="let city of getCitiesByCountry(selectedCountry)" [value]="city">{{ city }}</option>
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>`,
  // templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  user: string = '';
  email: string = '';
  selectedCountry: string = "";
  city: string = "";
  countries = [
    { name: 'USA', value: 'usa'},
    { name: 'Australia', value: 'aus'},
    { name: 'UK', value: 'uk'}
  ];

  cities: { [key: string]: string[] } = {
    usa: ['New York', 'Los Angeles', 'Chicago'],
    aus: ['Sydney', 'Melbourne', 'Brisbane'],
    uk: ['London', 'Manchester', 'Birmingham'],
  };

  getCitiesByCountry(country: string):string[]{
    return this.cities[country] || [];
  }

  onSubmit(myForm: NgForm){
    if(myForm.valid){
      const formData = {
        user: this.user,
        email: this.email,
        country: this.selectedCountry,
        city: this.city,
      };
      console.log('Form Submitted', formData);
    } else {
      alert('Please fill up the fields')
    }
  }
}
