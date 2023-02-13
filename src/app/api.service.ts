import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  login(user:string,password:string): Observable<any>{
    return this.http.post(
      "https://dummyjson.com/auth/login",
      {
        username:user,
        password:password
      }
    )
  }

  inserisciProdotto(prodotto:any): Observable<any> {
    return this.http.post(
      "https://dummyjson.com/auth/products/add",
      prodotto
    )
  }

  getUtente(id: string | number): Observable<any> {
    return this.http.get<any>(
      "https://dummyjson.com/users/" + id
    )
  }

  registrazione(data: any): Observable<any> {
    return this.http.post(
      "https://dummyjson.com/users/add",
      data
    )
  }

  getRecensioni(): Observable<any> {
    const skip = Math.round(Math.random() * 330)
    return this.http.get<any>(
      "https://dummyjson.com/comments?limit=10&skip=" + skip
    )
  }

  getProductsOfCategory(categoria: string): Observable<any> {
    return this.http.get<any>(
      "https://dummyjson.com/products/category/" + categoria)
  }

  getSingleProduct(id: string): Observable<any> {
    return this.http.get<any>(
      "https://dummyjson.com/products/" + id)
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(
      "https://dummyjson.com/products")
  }

  getCategories(): Observable<string[]> {
    return this.http.get<any>(
      "https://dummyjson.com/products/categories"
    )
  }

}
