import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginComponent } from '../login/login.component';

// Old Way of using CanActivate
@Injectable({
  providedIn: 'root',
})
export class FormGuardGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot,
  ): boolean {
    console.log(currentRoute);
    console.log(currentState);
    console.log(nextState);

    if (component.email?.dirty && component.password?.dirty) {
      return confirm(
        'Your changes are unsaved! Are you sure you want to leave ?',
      );
    }

    return false;
  }
}

// New way
// export const FormGuardGuard: CanDeactivateFn<LoginComponent> = (
//   component,
//   currentRoute,
//   currentState,
//   nextState,
// ) => {
//   console.log(currentRoute);
//   console.log(currentState);
//   console.log(nextState);
//   if (component.email?.dirty && component.password?.dirty) {
//     return confirm(
//       'Your changes are unsaved! Are you sure you want to leave ?',
//     );
//   }
//   return true;
// };
