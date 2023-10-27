import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  token: string = "";

  constructor(private http: HttpClient) { }

  get(url: string): any {
    return this.http.get("http://localhost:8080" + url);
  }

  getPrivate(url: string): any {
    return this.http.get("http://localhost:8080" + url, {headers: new HttpHeaders({"Authorization": "Bearer " + this.token})});
  }

  getToken(code: string): Observable<boolean> {
    return this.http.get<Token>("http://localhost:8080/auth/callback?code=" + code, {observe: "response"})
      .pipe(map((response: HttpResponse<Token>) => {
        if (response.status === 200 && response.body !== null) {
          this.token = response.body.token;
          return true;
        } else {
          return false;
        }
      }));
  }
}
