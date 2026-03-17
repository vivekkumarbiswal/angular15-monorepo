import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
  FilterPipe,
  FormateToRs,
  GreetPipe,
  MinInvestment,
  MultiplyPipe,
} from './customPipes.pipe';
import { CurrencyFormaterPipe } from './currency-formater.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreetPipe,
    MultiplyPipe,
    FilterPipe,
    MinInvestment,
    FormateToRs,
    CurrencyFormaterPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
