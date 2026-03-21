import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dynamicForm!: FormGroup;
  formConfig: any[] = [];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}
  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.http.get<any>('/assets/form-config.json').subscribe((data) => {
      this.formConfig = data;
      console.log(this.formConfig);
      this.createForm();
    });
  }
  createForm() {
    const group: any = {};

    this.formConfig.forEach((field) => {
      group[field.name] = [
        field.value || '',
        this.bindValidators(field.validators),
      ];
    });

    this.dynamicForm = this.fb.group(group);
  }

  bindValidators(validators: string[]) {
    if (!validators) return [];

    const validList: any[] = [];

    validators.forEach((v) => {
      if (v === 'required') validList.push(Validators.required);
      if (v === 'email') validList.push(Validators.email);
    });

    return validList;
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
