import { Injectable } from '@angular/core';
import { PowerService } from './power.service';

@Injectable()
export class CubeService {

  constructor(private power: PowerService) {}

  calculateCube(value: number){
    return this.power.calculatePower(value, 3);
  }
}
