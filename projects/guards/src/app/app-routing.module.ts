import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormGuardGuard } from './guads/form-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestGuard } from './test.guard';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [TestGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: LoginComponent, canDeactivate: [FormGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
