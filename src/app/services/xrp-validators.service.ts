import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Validator } from '../models/validators.model';

@Injectable({
  providedIn: 'root'
})
export class XrpValidatorsService {

  apiString = 'https://data.ripple.com/v2/';

  constructor(private http: HttpClient) { }

  getAllValidators(): Observable<Validator> {
    return this.http.get<Validator>(`${this.apiString}network/validators?format=json`)
  }
}
