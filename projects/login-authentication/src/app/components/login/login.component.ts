import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}
  isLogin() {
    const checkLogin = this.auth.login(this.email, this.password);

    if (checkLogin) {
      this.router.navigate(['/admin']);
    } else {
      alert('Please enter email and password');
    }
  }
}
