import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
employees = [
  { empId: '101', empName: 'EmpA', empDept:'General Mgmt Dept'},
  { empId: '102', empName: 'EmpB', empDept:'Marketing Dept'},
  { empId: '103', empName: 'EmpC', empDept:'HR Dept'},
  { empId: '103', empName: 'EmpD', empDept:'Sales Dept'}
];
}
