import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { convertToUpperCase } from './custom-validators/upperCase-validator';
import { urlValidator } from './custom-validators/url-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup;
  validateURL: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, convertToUpperCase]],
    });

    this.validateURL = this.fb.group({
      checkURL: ['', [Validators.required, urlValidator]],
    });
  }

  get formGetter() {
    return this.myForm;
  }

  validate() {
    if (!this.validateURL.valid) {
      alert('Please enter correct URL');
      return false;
    } else {
      return alert('URL is valid');
    }
  }
}
