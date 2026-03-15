import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvailablePlacesComponent } from './places/available-places/available-places.component';
import { PlacesContainerComponent } from './places/places-container/places-container.component';
import { PlacesComponent } from './places/places.component';
import { UserPlacesComponent } from './places/user-places/user-places.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPlacesComponent,
    AvailablePlacesComponent,
    PlacesContainerComponent,
    PlacesComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
