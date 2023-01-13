import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  read(indice:string){
    var data = localStorage.getItem(indice)
    if(data == null ) return {}

    return JSON.parse(data)
  }

  save(data:any,indice:string){
    data = JSON.stringify(data)
    localStorage.setItem(indice,data)
  }

}
