import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = new BehaviorSubject<Place[]>([]);

  loadedUserPlaces: Observable<Place[]> = this.userPlaces.asObservable();

  loadAvailablePlaces() {
    // fetch places logic
  }

  loadUserPlaces() {
    // load user places logic
  }

  addPlaceToUserPlaces(place: Place) {
    const currentPlaces = this.userPlaces.value;
    this.userPlaces.next([...currentPlaces, place]);
  }

  removeUserPlace(place: Place) {
    const updatedPlaces = this.userPlaces.value.filter(
      (p) => p.id !== place.id,
    );

    this.userPlaces.next(updatedPlaces);
  }
}
