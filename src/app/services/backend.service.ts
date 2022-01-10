import { Place } from './../models/place';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class BackendService {
  baseUrl: string =
    'https://pnsqr5ug4b.execute-api.ap-northeast-1.amazonaws.com/dev';

  constructor(private http: HttpClient) {}
  getAreas(): Observable<any> {
    return this.http.get(this.baseUrl + '/user/areas');
  }

  getAllPlaces(): Observable<any> {
    return this.http.get(this.baseUrl + '/user/places');
  }
}
