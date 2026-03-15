import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  formValue!: FormGroup;
  employeeModelObj: EmployeeModel = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    salary: ''
  };
  employeeData: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
  ) {}

  ngOnInit() {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    });
    this.getAllEmployee();
  }

  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Employee Added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      },
      (err) => {
        alert('Something went wrong');
      },
    );
  }

  getAllEmployee() {
    this.api.getEmployee().subscribe((res) => {
      this.employeeData = res;
    });
  }
  deleteEmployee(employee: any) {
    this.api.deleteEmployee(employee.id).subscribe((res) => {
      alert('Employee Deleted');
      this.getAllEmployee();
    });
  }

  clickAddEmployee() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  onEdit(employee: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObj.id = employee.id;
    this.formValue.controls['firstName'].setValue(employee.firstName);
    this.formValue.controls['lastName'].setValue(employee.lastName);
    this.formValue.controls['email'].setValue(employee.email);
    this.formValue.controls['mobile'].setValue(employee.mobile);
    this.formValue.controls['salary'].setValue(employee.firstName);
  }

  updateEmployeeDetails() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api
      .updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
      .subscribe((res) => {
        alert('Updated Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      });
  }
}
