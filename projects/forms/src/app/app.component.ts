import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: { username: string } = { username: ''};
  model = { email: '', password: ''};

  submitForm(myForm: NgForm){
    if(myForm.valid){
      alert('Submitted successfully, check console.');
      console.log(this.user);
    }
  }

    onSubmit(f: NgForm){
      console.log('Form submitted', f);
    }
}
