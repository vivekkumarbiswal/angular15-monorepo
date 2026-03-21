import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  userRole = 'user'; // change to 'admin' to test

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.userRole === 'admin') {
      return true;
    } else {
      this.router.navigate(['/access-denied']);
      return false;
    }
  }
}
