import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeMpService {

 
  constructor(private http: HttpClient) { }


  private apiUrl = 'http://localhost:8080/commande-mp/';


  addCommande(obj:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, obj, {
      headers,
      responseType: 'json' as 'json'
    });
  }


  valide(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-mp/update-valide/${id}`, {
      headers,
   
    });
  }


  fin(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-mp/update-fin/${id}`, {
      headers,
   
    });
  }


  preparationDuCommande(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-mp/update-preparation-du-commande/${id}`, {
      headers,
   
    });
  }


  chargementDeMp(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-mp/update-chargement-de-mp/${id}`, {
      headers,
   
    });
  }



  repartitionLogistique(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-mp/update-repartition-logistique/${id}`, {
      headers,
   
    });
  }


  enLivraison(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-mp/update-en-livraison/${id}`, {
      headers,
   
    });
  }


  reception(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-mp/update-reception/${id}`, {
      headers,
   
    });
  }





}
