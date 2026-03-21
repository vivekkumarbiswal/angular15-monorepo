import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<string[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string[] {
    return ['Laptop', 'Mobile', 'Tablet', 'Headphones', 'Smartwatch'];
  }
}
