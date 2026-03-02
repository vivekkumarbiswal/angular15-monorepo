import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigating-routes',
  templateUrl: './navigating-routes.component.html',
  styleUrls: ['./navigating-routes.component.scss']
})
export class NavigatingRoutesComponent {
  employees = [
    { id:1, name: 'UserA'},
    { id:2, name: 'UserB'},
    { id:3, name: 'UserC'},
    { id:4, name: 'UserD'},
    { id:5, name: 'UserE'}
  ];

  constructor(private router: Router){}

  navigateToDetail(empID: Number, empName: String){
      this.router.navigate(['/navigatingRouteDetail'],{
        queryParams: {id: empID, name: empName}
      });// Its sole purpose is to navigate to the different components within the application.
    }

}
