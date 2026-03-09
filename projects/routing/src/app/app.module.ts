import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    NewsComponent,
    ServicesComponent,
    ContactComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent,
    ActivatedRouteEmployeeComponent,
    QueryParametersComponent,
    NavigatingRoutesComponent,
    NavigatingRoutesDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterLink, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
