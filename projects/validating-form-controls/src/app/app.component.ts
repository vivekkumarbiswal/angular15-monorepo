import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup;
  nameControl: FormControl;
  emailControl: FormControl;

  constructor() {
    this.nameControl = new FormControl('', Validators.required);
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.myForm = new FormGroup({
      name: this.nameControl,
      email: this.emailControl,
    });
  }

  formSubmit() {
    if (this.myForm.valid) {
      console.log('Form value: ', this.myForm.value);
    }
  }
}
