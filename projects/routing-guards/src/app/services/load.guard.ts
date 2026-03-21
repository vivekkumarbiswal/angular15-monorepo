import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ModuleGuard implements CanLoad {
  userRole = 'user'; // change to 'admin' to test

  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this.userRole === 'admin') {
      return true;
    } else {
      alert('You are not allowed to load this module');
      return false;
    }
  }
}
