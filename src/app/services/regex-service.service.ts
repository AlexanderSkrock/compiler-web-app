import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegexServiceService {
  private apiUrl = `${environment.apiUrl}/regex`;

  constructor(private http: HttpClient) { }

  public testRegex(regex: string, stringToTest: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/test`,
      {
        regex,
        stringToValidate: stringToTest,
    });
  }
}
