import { Component, Input, OnInit } from '@angular/core';
import { CarrelloStorageService } from '../carrello-storage.service';
import { Prodotto } from './prodotto';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {
  
  constructor(private carrello:CarrelloStorageService) { }
  
  @Input() data!:Prodotto
  preferito:boolean = false
  inCarrello: boolean = false;

  aggiungiAcarrello():void{
    this.carrello.salva(this.data)
  }
  
  eNelCarrello():boolean{
    return this.carrello.inCarrello(this.data.id) >= 0
  }

  mostraDescrizione():string{
    const LIMITE = 50
    if(this.data.description.length<=50)
      return this.data.description
    
    let nuovaDesc
    nuovaDesc = this.data.description.slice(0,50)+"..."
    return nuovaDesc
  }

  scontaPrezzo():string{
    let prezzoScontato
    prezzoScontato = this.data.price
      -(this.data.price*this.data.discountPercentage/100)
    prezzoScontato = prezzoScontato.toFixed(2)
    return prezzoScontato
  }

}
