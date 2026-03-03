import { Component } from '@angular/core';
import { CubeService } from '../dependencies/cube.service';
import { PowerService } from '../dependencies/power.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  providers: [CubeService, PowerService]
})
export class MyComponentComponent {

  constructor(private cube: CubeService){}
  calcCube(): number {
    return this.cube.calculateCube(5);
  }
}
