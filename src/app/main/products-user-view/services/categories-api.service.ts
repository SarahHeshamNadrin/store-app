import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private http: HttpClient) { }

  public getCategories() { 
    return this.http.get<any[]>('https://fakestoreapi.com/products/categories');
  }
}
