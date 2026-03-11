import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  page: number = 1;
  role: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  users = [
    { id: 1, name: 'Vivek' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Amit' },
  ];

  ngOnInIt() {
    this.route.queryParams.subscribe((params) => {
      this.page = params['page'] || 1;
      this.role = params['role'] || null;

      console.log('Page:', this.page);
      console.log('Role:', this.role);
    });
  }

  goToUser(id: number) {
    this.router.navigate(['../user', id], {
      relativeTo: this.route,
    });
  }

  goToPage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }
}
