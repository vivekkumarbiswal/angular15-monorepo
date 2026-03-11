import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
    });
    // console.log('User ID:', id);
  }
}
