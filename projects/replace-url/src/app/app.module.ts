import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { AppRoutingModule } from 'projects/replace-url/src/app/app-routing.module';

@NgModule({
  declarations: [AppComponent, Com1Component, Com2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
