import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>('Initial Value')
  currentMessage$ = this.messageSource.asObservable();
}
