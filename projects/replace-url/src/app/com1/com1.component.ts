import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.scss'],
})
export class Com1Component {
  constructor(private router: Router) {}
  goToCom2() {
    this.router.navigate(['/com2'], { replaceUrl: true });
  }
}
