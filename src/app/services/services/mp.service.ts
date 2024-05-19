import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MP } from '../models/MP';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MPService {

  constructor( private http: HttpClient) { }

  apiUrl:string = "http://localhost:8080/mps/"
  
  addMP(mp: MP): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, mp, {
      headers,
      responseType: 'json' as 'json'
    });
  }




  findAllMPs(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<any>(this.apiUrl, {
      headers,
      responseType: 'json' as 'json'
    });
  }


  findMPsByUser(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<any>("http://localhost:8080/users/"+id, {
      headers,
      responseType: 'json' as 'json'
    });
  }

}
