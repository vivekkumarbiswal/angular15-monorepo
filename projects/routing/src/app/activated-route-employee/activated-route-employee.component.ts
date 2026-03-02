import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activated-route-employee',
  templateUrl: './activated-route-employee.component.html',
  styleUrls: ['./activated-route-employee.component.scss']
})
export class ActivatedRouteEmployeeComponent {
id: string = ''; 
name: string = '';

constructor (private route: ActivatedRoute){
  // this.id = this.route.snapshot.params['id'];
  const params = this.route.snapshot.params; 
  this.id = params['id'];
  this.name = params ['name'];
  console.log(`Employe Id: ${this.id} & Employee Name: ${this.name}`)
}
}
