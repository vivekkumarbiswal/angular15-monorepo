import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { ActivatedRouteEmployeeComponent } from './activated-route-employee/activated-route-employee.component';
import { QueryParametersComponent } from './query-parameters/query-parameters.component';
import { NavigatingRoutesComponent } from './navigating-routes/navigating-routes.component';
import { NavigatingRoutesDetailComponent } from './navigating-routes-detail/navigating-routes-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'employee/:empName/:empId', component: EmployeeComponent },

  {
    path: 'parent',
    component: ParentComponent,
    children: [
      { path: 'firstChild', component: FirstChildComponent },
      { path: 'secondChild', component: SecondChildComponent },
    ],
  },

  // Activated Route
  {
    path: 'activateRouteEmployee/:id/:name',
    component: ActivatedRouteEmployeeComponent,
  },

  //Query parameter
  { path: '', redirectTo: '/queryParameter', pathMatch: 'full' },
  { path: 'queryParameter', component: QueryParametersComponent },

  //Navigating route
  { path: '', redirectTo: 'navigatingRoute', pathMatch: 'full' },
  { path: 'navigatingRoute', component: NavigatingRoutesComponent },
  { path: 'navigatingRouteDetail', component: NavigatingRoutesDetailComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
