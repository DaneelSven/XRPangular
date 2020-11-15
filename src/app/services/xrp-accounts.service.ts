import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class XrpAccountsService {

  constructor(private http: HttpClient) { }

  fetchAccountInfo(id: string): Observable<any> {
    return this.http.get<any>(`https://data.ripple.com/v2/accounts/${id}`)
  }
}
