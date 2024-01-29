import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // private baseUrl= 'http://localhost:3100';

  constructor(private http: HttpClient) { }

  updateData(word: string, tabooWords: string[]): Observable<any> {
    const data= {word, tabooWords};
    console.log("Update Data in Service Runnning",data)
    return this.http.put<any>('http://localhost:3100/data',data);
  }

  deleteData(word: string): Observable<any> {
    return this.http.request('delete', 'http://localhost:3100/data', { body: { word } });
  }


}