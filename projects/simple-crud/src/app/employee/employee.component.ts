import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  form!: FormGroup;
  employees: Employee[] = [];
  editId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private _employeeService: EmployeeService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      salary: [0, Validators.required],
    });
    this.getEmployees();
  }

  getEmployees() {
    this._employeeService.getEmployees().subscribe((res) => {
      this.employees = res;
    });
  }
  submit() {
    if (this.editId === null) {
      this._employeeService.addEmployee(this.form.value).subscribe(() => {
        this.getEmployees();
        this.form.reset();
      });
    } else {
      this._employeeService
        .updateEmployee(this.editId, this.form.value)
        .subscribe(() => {
          this.getEmployees();
          this.form.reset();
          this.editId = null;
        });
    }
  }

  edit(emp: any) {
    this.editId = emp.id;
    this.form.patchValue(emp);
  }

  delete(id: number) {
    this._employeeService.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
    });
  }
}
