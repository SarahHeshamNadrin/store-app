import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  public getProducts() { 
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }

  public addProduct(product: any) { 
  }
}
