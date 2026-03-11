import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // This is lazy-loading
  {
    path: 'basic',
    loadChildren: () =>
      import('./routing-basics/routing-basics.module').then(
        (m) => m.RoutingBasicsModule,
      ),
  },
  {
    path: 'params',
    loadChildren: () =>
      import('./route-params/route-params.module').then(
        (m) => m.RouteParamsModule,
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./child-routes/child-routes.module').then(
        (m) => m.ChildRoutesModule,
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
