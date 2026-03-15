import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  api = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.api);
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post(this.api, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`${this.api}/${id}`, data);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
