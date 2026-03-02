import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigating-routes-detail',
  templateUrl: './navigating-routes-detail.component.html',
  styleUrls: ['./navigating-routes-detail.component.scss']
})
export class NavigatingRoutesDetailComponent {
  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute, private router: Router){
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
      console.log(params);
    });
  }

  backTOEmployee(){
    this.router.navigate(['/navigatingRoute'])
  }
}
