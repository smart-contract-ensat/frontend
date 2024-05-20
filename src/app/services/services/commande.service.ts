import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }


  private apiUrl = 'http://localhost:8080/commande-product/';


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


  activeAcquisitionMp(id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-product/upadte-acquisitionmp/${id}`, {
      headers,
      
    });
  }



  activeassemblageProduit(id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-product/upadte-assemblageproduit/${id}`, {
      headers,
     
    });
  }



  valide(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-product/upadte-valide/${id}`, {
      headers,
   
    });
  }


  eballageEtiquetageProduit(id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-product/upadte-eballageetiquetageproduit/${id}`, {
      headers,
      
    });
  }

  fin(id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-product/upadte-fin/${id}`, {
      headers,
    
    });
  }

  stockageDistributionProduit(id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-product/upadte-stockagedistributionproduit/${id}`, {
      headers,
    
    });
  }


  transformationMp(id:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.patch<any>(`http://localhost:8080/commande-product/upadte-transformationmp/${id}`, {
      headers,
     
    });
  }



}
