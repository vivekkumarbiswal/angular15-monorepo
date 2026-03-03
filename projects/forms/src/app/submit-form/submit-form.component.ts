import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent {
  formSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const formValues = JSON.stringify(myForm.value);
      console.log(formValues);
      console.log('%c Form submitted successfully', 'color: green; font-weight: 400; font-size: 15px');
    }
    else {
      alert("Please fill up the required fields");
      console.log('%c Please fill the Form', 'color: red; font-weight: 400; font-size: 15px');
    }
  }
  resetValue(myForm: NgForm) {
    myForm.resetForm();
  }

  setDefault(myForme: NgForm) {
    myForme.resetForm({
      name: 'Default Name',
      email: 'defaultId@gmail.com',
    })
  }
}
