import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScannerServiceService {
  private apiUrl = '/api/scanner';

  constructor(private http: HttpClient) { }

  public scanString(tokens: object, stringToTest: string): Observable<object> {
    return this.http.post(`${this.apiUrl}/scan`, {
      tokens,
      string: stringToTest
    });
  }
}
