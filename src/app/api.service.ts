import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http:HttpClient) { }
  
  getProductsOfCategory(categoria:string): Observable<any>{
    return this.http.get<any>(
      "https://dummyjson.com/products/category/"+categoria)
  }
  
  getSingleProduct(id:string): Observable<any> {
    return this.http.get<any>(
      "https://dummyjson.com/products/"+id)
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(
      "https://dummyjson.com/products")
  }

  getCategories():Observable<string[]>{
    return this.http.get<any>(
      "https://dummyjson.com/products/categories"
    )
  }

}
