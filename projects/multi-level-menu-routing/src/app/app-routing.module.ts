import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},

  {path:'products', component:ProductsComponent, children:[
    {path:'', redirectTo:'shirts', pathMatch:'full'},
    {path:'shirts', component: ShirtsComponent},
    {path:'pants', component: PantsComponent},
    {path:'shoes', component: ShoesComponent},
  ]},
  {path:'contact', component:ContactComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
