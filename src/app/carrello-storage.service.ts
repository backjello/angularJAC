import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto/prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloStorageService {

  constructor() { }

  salva(prodotto:Prodotto):Prodotto[]{
    //[{ id:1,... }, {id: 2,...}]
    const carrello = this.leggi()
    const id = prodotto.id
    let indiceCarrello=this.inCarrello(id)
    let inCarrello = indiceCarrello >= 0
    if(!inCarrello){
      prodotto.quantity=1
      carrello.push(prodotto)
    }
    else{
      const quantity = carrello[indiceCarrello].quantity
      if(quantity)
        carrello[indiceCarrello].quantity=quantity+1
    }

    localStorage.setItem('carrello',JSON.stringify(carrello))

    return this.leggi()
  }

  inCarrello(id:number):number{
    const carrello = this.leggi()
    let indiceCarrello = -1
    carrello.forEach((prod:Prodotto,index:number) => {
      if(prod.id==id){
        indiceCarrello=index
      }
    });
    // se indiceCarrello è negativo il prodotto non è nel carrello
    return indiceCarrello
  }

  leggi():Prodotto[]{
    const carrello = localStorage.getItem('carrello') 
    // carrello può essere una stringa o null
    if(carrello != null){
      return JSON.parse(carrello)
    }
    
    return []  
  }

  svuota(){
    localStorage.removeItem('carrello')
  }

}
