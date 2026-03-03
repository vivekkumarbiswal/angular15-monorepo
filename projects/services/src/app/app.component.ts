import { Component } from '@angular/core';
import { EmployeeService } from './dependencies/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employees: any [];
  empId: number = 0;
  show = false;
  constructor(private e: EmployeeService){
    this.employees = this.e.getEmployee();
    console.log(this.employees);
  }
  
  showDetails(id:number){
    this.empId = id;
    this.show = !this.show;
  }
}
