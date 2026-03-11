import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouteParamsRoutingModule } from './route-params-routing.module';

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [CommonModule, RouteParamsRoutingModule],
})
export class RouteParamsModule {}
