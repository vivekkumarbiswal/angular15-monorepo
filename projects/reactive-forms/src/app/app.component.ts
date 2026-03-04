import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myForm: FormGroup;

  employeeForm: FormGroup;

  employeeFormBuilder: FormGroup;

  usernameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.pattern('^[a-zA-Z0-9]+$')
  ])
  showValue(){
    console.log("Value: ", this.usernameControl.value);
    console.log("Validation Status: ", this.usernameControl.valid )
    console.log(this.usernameControl.errors)
  }

  constructor( private fb: FormBuilder){
    // FormGroup
    this.myForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      age: new FormControl("", Validators.min(18)), 
    });

    // FormArray
    this.employeeForm = new FormGroup({
      employees: new FormArray([]), 
    })

    // FormBuilder
    this.employeeFormBuilder = this.fb.group({
      employees: this.fb.array([]),
    })
  }
  
  submitForm(){
    const userAge = this.myForm.get("age")?.value; 
    if(userAge < 18){
      alert("Age must be 18 or above");
    } else if(this.myForm.valid){
      console.log(this.myForm.value)
    }
  }

  get employees(): FormArray{
    return this.employeeForm.get('employees') as FormArray
  }

  addEmployee(): void {
    const employeeGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required)
    });
    this.employees.push(employeeGroup);
  }

  addEmployeeFormBuilder(): void {
    const employeeGroup = this.fb.group({
      name: ["", Validators.required],
      job: ["", Validators.required]
    });
    this.employees.push(employeeGroup);
  }

  onSubmitForm(){
    if(this.employeeForm.invalid){
      return;
    } else {
      console.log(this.employeeForm.value);
    }
  }
}
