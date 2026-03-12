import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

// Old Way of using CanActivate
@Injectable({
  providedIn: 'root',
})
export class TestGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return false;
  }
}

// New Way of using CanActivate
// export const TestGuard: CanActivateFn = (route, start) => {
//   return false;
// };
