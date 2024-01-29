import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginServiceService {
  private apiUrl = 'http://localhost:3100/admin-login'; 

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    //console.log(credentials)
    return this.http.post(this.apiUrl, credentials);
  }
}
