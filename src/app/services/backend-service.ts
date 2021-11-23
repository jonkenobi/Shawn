import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class BackendService {
  baseUrl: string =
    'https://zg8ex1thk5.execute-api.ap-northeast-1.amazonaws.com/dev/';

  constructor(private http: HttpClient) {}
  getAreas(): Observable<any> {
    return this.http.get(this.baseUrl + 'user/areas');
  }

  getAllLocations(): Observable<any> {
    return this.http.get(this.baseUrl + 'user/locations');
  }
}
