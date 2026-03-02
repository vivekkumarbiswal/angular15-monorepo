import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-parameters',
  templateUrl: './query-parameters.component.html',
  styleUrls: ['./query-parameters.component.scss']
})
export class QueryParametersComponent {
  id: string = '';
  name: string = '';
  employees = [
    { id:101, name: 'UserAA'},
    { id:102, name: 'UserBB'},
    { id:103, name: 'UserCC'},
    { id:104, name: 'UserDD'},
    { id:105, name: 'UserEE'}
  ];


  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
      console.log(params);
    })
  }
  
}
