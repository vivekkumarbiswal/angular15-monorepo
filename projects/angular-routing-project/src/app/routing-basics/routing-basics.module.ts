import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterBasicsRoutingModule } from './routing-basics-routing.module';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [CommonModule, RouterBasicsRoutingModule],
})
export class RoutingBasicsModule {}
