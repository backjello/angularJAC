import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Prodotto } from '../prodotto/prodotto';

@Component({
  selector: 'app-filtri',
  templateUrl: './filtri.component.html',
  styleUrls: ['./filtri.component.css']
})
export class FiltriComponent {

  form = this.fb.group({
    brand: [""],
    category: [""],
    minPrice: [, Validators.min(0)],
    maxPrice: [, Validators.min(0)],
  })
  categorie: string[] = []
  minStar: number = -1
  @Input()prodotti:Prodotto[]=[]
  @Output()filtriApplicati: EventEmitter<Prodotto[]> =
  new EventEmitter()
  
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.api.getCategories().subscribe((res) =>
      //res = ['cellulari','pc','tablet',...]
      this.categorie = res
    )
  }

  filtra(){
    const formData = this.form.value
    //prodottiF sono i prodotti filtrati
    const prodottiF = this.prodotti.filter((prod:Prodotto)=>{
      let categoria = true
      let prezzoMin=true,prezzoMax=true
      
      if(formData.category!="")
        categoria = prod.category == formData.category
        
      if(formData.minPrice)
        prezzoMin = prod.price >= formData.minPrice
      if(formData.maxPrice)
        prezzoMax = prod.price <= formData.maxPrice

      const rating = prod.rating >= this.minStar      

      return categoria && prezzoMin && prezzoMax && rating 
    })
    console.log(this.prodotti);
    
    this.filtriApplicati.emit(prodottiF)
  }
  reset(){
    this.form.reset()
    this.minStar=-1
    console.log(this.prodotti);
    
    this.filtriApplicati.emit(this.prodotti)
  }
}

