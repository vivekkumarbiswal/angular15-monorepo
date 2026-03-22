import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  loginAsAdmin() {
    this.auth.login('admin');
    this.router.navigate(['/admin']);
  }

  loginAsUser() {
    this.auth.login('user');
    this.router.navigate(['/user']);
  }
}
