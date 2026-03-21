import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';

@Injectable({ providedIn: 'root' })
export class NotCompleteGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(component: ContactComponent): boolean {
    if (component.formDirty) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
