import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XrpValidatorsService {

  apiString = 'https://data.ripple.com/v2/';

  constructor(private http: HttpClient) { }

  getAllValidators(): Observable<any> {
    return this.http.get<any>(`${this.apiString}network/validators?format=json`)
  }
}
