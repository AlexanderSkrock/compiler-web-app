import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegexServiceService {
  private apiUrl = '/api/regex';

  constructor(private http: HttpClient) { }

  public testRegex(regex: string, stringToTest: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/test`,
      {
        regex: regex || '',
        stringToValidate: stringToTest || '',
    });
  }
}
