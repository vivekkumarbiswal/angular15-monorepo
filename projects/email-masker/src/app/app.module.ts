import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmailMaskComponent } from './component/email-mask/email-mask.component';
import { EmailMaskPipe } from './pipes/email-mask.pipe';

@NgModule({
  declarations: [AppComponent, EmailMaskComponent, EmailMaskPipe],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
