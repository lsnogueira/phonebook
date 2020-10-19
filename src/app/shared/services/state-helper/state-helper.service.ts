import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateHelperService {
  remakeRequest: Observable<boolean>;

  private _remakeRequest$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.remakeRequest = this._remakeRequest$.asObservable();
  }

  set setRemakeRequestValue(newValue: boolean) {
    this._remakeRequest$.next(newValue);
  }
}
