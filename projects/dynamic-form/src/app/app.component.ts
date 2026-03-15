import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl(''),
    skills: new FormArray([new FormControl('')]),
  });

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(new FormControl(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    const formData = this.form.value;
    console.log(formData);
  }
}
