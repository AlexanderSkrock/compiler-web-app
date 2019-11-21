import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScannerServiceService {
  private apiUrl = '/api/scanner';

  constructor(private http: HttpClient) { }

  public scanString(tokens: any[], stringToTest: string): Observable<any[]> {
    const tokenDefinitions = {};
    (tokens || []).forEach(token => tokenDefinitions[token.type] = token.regex);
    return this.http.post<any[]>(`${this.apiUrl}/scan`, {
      tokenDefinitions: tokenDefinitions || {},
      inputString: stringToTest || '',
    });
  }
}
