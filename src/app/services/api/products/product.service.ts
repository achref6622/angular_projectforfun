import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

private baseUrl:string = "https://fakestoreapi.com/"

constructor(private http: HttpClient) { }


  getAllProductWithLimits( limit :number =5):Observable<ProductRepresentation[]> {
    const producturl :string = this.baseUrl+'products?limit='+5
    const producturl2: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<ProductRepresentation[]>(producturl2); 

  }
  createproduct(product : ProductRepresentation):Observable<ProductRepresentation> {
    const producturl2: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(producturl2,product); 

  }
}
