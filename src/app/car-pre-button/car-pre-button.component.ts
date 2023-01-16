import { Component, Input, OnInit } from '@angular/core';
import { CarrelloStorageService } from '../carrello-storage.service';
import { PreferitiService } from '../preferiti.service';
import { Prodotto } from '../prodotto/prodotto';

@Component({
  selector: 'app-car-pre-button',
  templateUrl: './car-pre-button.component.html',
  styleUrls: ['./car-pre-button.component.css']
})
export class CarPreButtonComponent {

  @Input()data!:Prodotto
  @Input()mode!: 'preferiti'|'carrello'

  constructor(private carrello:CarrelloStorageService,
    private preferiti:PreferitiService) {
    }

  aggiungiAcarrello(): void {
    this.carrello.salva(this.data)
  }
  aggiungiApreferiti() {
    this.preferiti.salva(this.data)
  }
  eNelCarrello(): boolean {
    return this.carrello.inCarrello(this.data.id) >= 0
  }
  eNeiPreferiti(): boolean {
    return this.preferiti.inPreferiti(this.data.id) >= 0
  }
  rimuoviDapreferiti() {
    this.preferiti.rimuovi(this.data)
  }

}
