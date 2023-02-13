import { Component, Input, OnInit } from '@angular/core';
import { PreferitiService } from 'src/app/services/preferiti.service';
import { CarrelloStorageService } from '../../services/carrello-storage.service';
import { Prodotto } from './prodotto';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {
  

  constructor(private carrello: CarrelloStorageService,
    private preferiti: PreferitiService) { }

  @Input() data!: Prodotto
  preferito: boolean = false
  inCarrello: boolean = false;

  
  mostraDescrizione(): string {
    const LIMITE = 50
    if (this.data.description.length <= 50)
      return this.data.description

    let nuovaDesc
    nuovaDesc = this.data.description.slice(0, 50) + "..."
    return nuovaDesc
  }

  scontaPrezzo(): string {
    let prezzoScontato
    prezzoScontato = this.data.price
      - (this.data.price * this.data.discountPercentage / 100)
    prezzoScontato = prezzoScontato.toFixed(2)
    return prezzoScontato
  }

}
