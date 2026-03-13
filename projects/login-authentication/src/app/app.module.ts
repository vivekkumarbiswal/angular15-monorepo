import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './authentication/auth.service';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, AdminComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
