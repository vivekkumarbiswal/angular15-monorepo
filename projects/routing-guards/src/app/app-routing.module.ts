import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutEditComponent } from './components/about-edit/about-edit.component';
import { AboutComponent } from './components/about/about.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

import { AuthGuard } from './services/auth.guard';
import { NotCompleteGuard } from './services/can-deactivate.guard';
import { ModuleGuard } from './services/load.guard';
import { ProductResolver } from './services/resolve.guard';
import { RoleGuard } from './services/role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'products',
    component: ProductsComponent,
    resolve: { products: ProductResolver },
  },

  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [RoleGuard],
    children: [{ path: 'edit', component: AboutEditComponent }],
  },

  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [NotCompleteGuard],
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'offers',
    loadChildren: () =>
      import('./modules/offers/offers.module').then((m) => m.OffersModule),
    canLoad: [ModuleGuard],
  },

  { path: 'access-denied', component: AccessDeniedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
