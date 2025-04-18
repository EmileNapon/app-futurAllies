import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../../../src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class Service {

  private apiUrl = environment.apiUrl;
 // private apiUrlIncrit = 'http://127.0.0.1:8000/fidalli/inscrit/create/';
//  private apiUrl1 = 'http://localhost:8000/fidalli/domaines/create/';

  constructor(private http: HttpClient) {}

  registerFormation(inscrit: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/inscrit/create/`, inscrit);
  }



}