import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './api.service';
import { CarelloComponent } from './carello/carello.component';
import { Prodotto } from './prodotto/prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  prodotti:Prodotto[] = []
  loading:boolean=true
  constructor(
    private api:ApiService, private dialog:MatDialog){}
  
  apriModal(tipo:string){
    //tipo mi indica se apro il carrello o i preferiti
    this.dialog.open(CarelloComponent,{
      minWidth:"80%",
      data:{
        tipo:tipo
      }
    })
  }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>{
      console.log(data)
      this.prodotti=data.products
      this.loading=false
    })
  }

}
