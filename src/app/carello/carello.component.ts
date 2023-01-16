import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarrelloStorageService } from '../carrello-storage.service';
import { PreferitiService } from '../preferiti.service';
import { Prodotto } from '../prodotto/prodotto';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrls: ['./carello.component.css']
})
export class CarelloComponent {

  prodotti: Prodotto[] = []
  colonneMostrate = ['img', 'nome', 'prezzo', 'quantita', 'totale'];
  tipo:string=""

  constructor(
    private dialogRef: MatDialogRef<CarelloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carrelloService: CarrelloStorageService,
    private preferitiService:PreferitiService) {
    this.prodotti = carrelloService.leggi()
    this.tipo=data.tipo
    if(data.tipo=="preferiti"){
      this.prodotti=preferitiService.leggi()
      this.colonneMostrate=['img','nome','descrizione','prezzo']}
  }

  totaleCarrello() {
    let tot = 0
    this.prodotti.forEach((prodotto: Prodotto) => {
      if (prodotto.quantity)
        tot = tot + prodotto.quantity * prodotto.price
    });
    return tot
  }

  svuota() {
    if(this.tipo=='carrello')
      this.carrelloService.svuota()
    else
      this.preferitiService.svuota()
    this.prodotti = []
  }

  chiudi() {
    this.dialogRef.close()
  }

}
