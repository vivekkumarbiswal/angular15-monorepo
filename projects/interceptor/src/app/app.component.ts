import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      console.log(res);
    });
  }
}
