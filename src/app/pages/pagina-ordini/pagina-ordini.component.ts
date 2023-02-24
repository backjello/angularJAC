import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/componentes/prodotto/prodotto';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-pagina-ordini',
  templateUrl: './pagina-ordini.component.html',
  styleUrls: ['./pagina-ordini.component.css']
})
export class PaginaOrdiniComponent {

  loading:boolean = true
  prodotti:Prodotto[]=[] // tutti nell'ordine dell'utente
  colonneMostrate:string[] = ['img', 'nome', 'prezzo', 'quantita', 'totale'];

  constructor(
    private localStorage:LocalstorageService,
    private api:ApiService
    ) {
    const ID = this.localStorage.read("utente").id
    this.api.getOrdini(ID).subscribe((res)=>{
      console.log(res);
      this.prodotti = res.carts[0].products // l'array di tutti i prodotti
      this.getProdotti(this.prodotti,0) //andiamo a prendere i prodotti partendo dal primo
      console.log(this.prodotti)
    })
  }

  getProdotti(prodotti:any[],i:number){
    const id = prodotti[i].id
    this.api.getSingleProduct(id).subscribe((res)=>{
      this.prodotti[i] = {...this.prodotti[i],...res} // unisco i dati (spread operator)
      console.log(res)
      // non ho finito di predendere i prodotti, chiedo il successivo
      i++
      if( i < prodotti.length ){ 
        this.getProdotti(prodotti,i)
      }
      else{ // caricamento finito
        this.loading = false
      }
    })
  }






}
