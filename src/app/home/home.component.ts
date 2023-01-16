import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { CarelloComponent } from '../carello/carello.component';
import { Prodotto } from '../prodotto/prodotto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodotti:Prodotto[] = []
  prodottiFiltrati:Prodotto[]=[]
  loading:boolean=true
  constructor(private api:ApiService, private dialog:MatDialog){}
    
  aggiornaProdotti(filtrati:Prodotto[]) {
    this.prodottiFiltrati=filtrati
  }
  

  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>{
      console.log(data)
      this.prodotti=data.products
      //non ci sono filtri quindi mostro tutti i prodotti
      this.prodottiFiltrati=data.products
      this.loading=false
    })
  }


}
