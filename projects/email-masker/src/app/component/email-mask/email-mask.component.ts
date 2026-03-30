import { Component } from '@angular/core';

@Component({
  selector: 'app-email-mask',
  templateUrl: './email-mask.component.html',
  styleUrls: ['./email-mask.component.css'],
})
export class EmailMaskComponent {
  list = [
    'john.doe@gmail.com',
    'a@gmail.com',
    undefined,
    'ab@gmail.com',
    'user123@yahoo.com',
    null,
  ];

  validList = this.list.filter((email): email is string => !!email);
}
