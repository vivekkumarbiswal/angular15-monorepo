import { Component, OnDestroy, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map, Subscription, throwError } from 'rxjs';
import { Place } from '../place.model';

@Component({
  selector: 'app-available-places',
  templateUrl: './available-places.component.html',
  styleUrls: ['./available-places.component.css'],
})
export class AvailablePlacesComponent implements OnInit, OnDestroy {
  // places = signal<Place[]>([]);
  places: Place[] = [];
  isFetching = false;
  error = '';
  sub!: Subscription;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.isFetching = true;
    this.sub = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places')
      .pipe(
        map((resData) => resData.places),
        catchError((err) => {
          console.log(err);

          return throwError(
            () =>
              new Error(
                'Something went wrong fetchin the available places. Please try again later',
              ),
          );
        }),
      )
      .subscribe({
        next: (places) => {
          // this.places.set(resData.places);
          this.places = places;
        },
        error: (err: Error) => {
          this.error = err.message;
        },
        complete: () => {
          this.isFetching = false;
        },
      });
  }

  // onSelectPlace(selectPlace: Place) {
  //   this.httpClient
  //     .('http://localhost:3000/user-places', {
  //       placesId: selectPlace.id,
  //     })
  //     .subscribe({
  //       next: (res) => console.log(res),
  //     });
  // }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
