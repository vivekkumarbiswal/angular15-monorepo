import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivateChild {
  userRole = 'user';

  canActivateChild(): boolean {
    if (this.userRole === 'admin') {
      return true;
    } else {
      alert('Access denied for child route');
      return false;
    }
  }
}
