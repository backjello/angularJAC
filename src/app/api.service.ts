import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http:HttpClient) { }

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
