import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto/prodotto';

@Injectable({
  providedIn: 'root'
})
export class PreferitiService {

  constructor() { }

  salva(prodotto:Prodotto):Prodotto[]{
    //[{ id:1,... }, {id: 2,...}]
    const preferiti = this.leggi()
    const id = prodotto.id
    let indicePreferiti=this.inPreferiti(id)
    let inPreferiti = indicePreferiti >= 0
    if(!inPreferiti){
      preferiti.push(prodotto)
    }

    localStorage.setItem('preferiti',JSON.stringify(preferiti))

    return this.leggi()
  }

  inPreferiti(id:number):number{
    const preferiti = this.leggi()
    let indicePreferiti = -1
    preferiti.forEach((prod:Prodotto,index:number) => {
      if(prod.id==id){
        indicePreferiti=index
      }
    });
    // se indicePreferiti è negativo il prodotto non è nel preferiti
    return indicePreferiti
  }

  leggi():Prodotto[]{
    const preferiti = localStorage.getItem('preferiti') 
    // preferiti può essere una stringa o null
    if(preferiti != null){
      return JSON.parse(preferiti)
    }
    
    return []  
  }

  svuota(){
    localStorage.removeItem('preferiti')
  }
}
