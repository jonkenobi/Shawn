import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class BackendService {
  baseUrl: string =
    'https://f2el0c2rbh.execute-api.ap-northeast-1.amazonaws.com/dev';

  constructor(private http: HttpClient) {}
  getAreas(): Observable<any> {
    return this.http.get(this.baseUrl + '/user/areas');
  }

  getAllLocations() {
    return this.http.get(this.baseUrl + '/user/locations');
  }
}
