import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http:HttpClient) { }

  getRecensioni():Observable<any>{
    const skip = Math.round(Math.random() * 330)
    return this.http.get<any>(
      "https://dummyjson.com/comments?limit=10&skip="+skip
    )
  }
  
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
