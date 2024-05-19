import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { HttpClient, HttpContext, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { StrictHttpResponse } from '../strict-http-response';
import { ContactDto } from '../models';
import { RequestBuilder } from '../request-builder';
import { ContactService } from './contact.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }
   static readonly FindAll2Path = "/products/"
  findAll2$Response(params?: { context?: HttpContext }): Observable<StrictHttpResponse<Array<Product>>> {
    const rb = new RequestBuilder(this.rootUrl, ProductService.FindAll2Path, 'get');
    if (params) {}

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Product>>;
      })
    );
  }

  findAll2(params?: { context?: HttpContext }): Observable<Array<Product>> {
    return this.findAll2$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Product>>) => r.body as Array<Product>)
    );
  }


  static readonly Save2Path = "/products/"

  save2$Response(params: { context?: HttpContext; body: Product }): Observable<StrictHttpResponse<number>> {
    const rb = new RequestBuilder(this.rootUrl, ProductService.Save2Path, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    console.log("==================== content envoyeé")
       console.log(params.body);

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  save2(params: { context?: HttpContext; body: Product }): Observable<number> {
    return this.save2$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  private apiUrl = 'http://localhost:8080/products/';


  addProduct(product: Product): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, product, {
      headers,
      responseType: 'json' as 'json'
    });
  }

  findAllProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<any>(this.apiUrl, {
      headers,
      responseType: 'json' as 'json'
    });
  }


  findProductByUser(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<any>("http://localhost:8080/users/"+id, {
      headers,
      responseType: 'json' as 'json'
    });
  }


  findProductById(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<any>("http://localhost:8080/products/"+id, {
      headers,
      responseType: 'json' as 'json'
    });
  }


}
