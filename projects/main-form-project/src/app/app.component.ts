import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  step: any = 1;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userDetails: this.fb.group({
        fname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }),
      additionalDetails: this.fb.group({
        mobile: ['', [Validators.required, Validators.maxLength(10)]],
        address: ['', Validators.required],
        country: ['', Validators.required],
        gender: ['', Validators.required],
      }),
      feedback: this.fb.group({
        comments: [''],
      }),
    });
  }

  get userDetails() {
    return this.myForm.get('userDetails') as FormGroup;
  }

  btnPrevious() {
    this.step -= 1;
  }

  btnNext() {
    let userDetailGroup = this.myForm.get('userDetails') as FormGroup;
    let additionalDetailsGroup = this.myForm.get(
      'additionalDetails',
    ) as FormGroup;
    if (userDetailGroup.invalid && this.step == 1) {
      return;
    }
    if (additionalDetailsGroup.invalid && this.step == 2) {
      return;
    }
    if (this.step < 3) {
      this.step += 1;
    }
  }
  formSubmit() {
    console.log(this.myForm);
  }
}
