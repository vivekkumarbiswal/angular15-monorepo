import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SettingsComponent } from './settings/settings.component';
import { ChildRoutesRoutingModule } from './child-routes-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminUsersComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, ChildRoutesRoutingModule],
})
export class ChildRoutesModule {}
