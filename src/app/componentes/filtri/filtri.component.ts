import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router  } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Prodotto } from '../prodotto/prodotto';

@Component({
  selector: 'app-filtri',
  templateUrl: './filtri.component.html',
  styleUrls: ['./filtri.component.css']
})
export class FiltriComponent implements OnInit {

  form! :any
  loading:boolean = true
  categorie: string[] = []
  minStar: number = -1
  @Input() prodotti: Prodotto[] = []
  @Input() categoria: string | null = ''
  @Output() filtriApplicati: EventEmitter<Prodotto[]> =
    new EventEmitter()

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router:Router,
    private route:ActivatedRoute
    ) {
      this.api.getCategories().subscribe((res) => {
          //res = ['cellulari','pc','tablet',...]
          this.categorie = res
          this.form = this.fb.group({
            brand: [""],
            category: [this.categoria],
            minPrice: [, Validators.min(0)],
            maxPrice: [, Validators.min(0)],
          })
          this.loading=false
      })
      this.router.events.subscribe((event:any)=>{
        if(event instanceof NavigationEnd){
          this.filtra()
        }
      })
    }
    
  ngOnInit(): void {
    setTimeout(()=>{
      if (this.route.snapshot.paramMap.get('ricerca')) {
            this.filtra()
        }
    })
  }


  filtra() {
    let formData = this.form?.value
    if(formData == undefined){
      formData = {}
    }
    const ricerca = this.route.snapshot.paramMap.get('ricerca')
    //prodottiF sono i prodotti filtrati
    const prodottiF = this.prodotti.filter((prod: Prodotto) => {
      let categoria = true, search = false
      let prezzoMin = true, prezzoMax = true

      if (formData.category != "" && formData.category != null)
        categoria = prod.category == formData.category

      if (formData.minPrice)
        prezzoMin = prod.price >= formData.minPrice
      if (formData.maxPrice)
        prezzoMax = prod.price <= formData.maxPrice

      if(ricerca==null || ricerca == "")
        search=true

      else if(prod.description.toLowerCase().includes(ricerca) ||
        prod.title.toLowerCase().includes(ricerca))
          search = true


      const rating = prod.rating >= this.minStar

      return categoria && prezzoMin && prezzoMax && rating && search
    })

    console.log(prodottiF);

    this.filtriApplicati.emit(prodottiF)
  }
  reset() {
    this.form.reset()
    this.minStar = -1
    this.filtriApplicati.emit(this.prodotti)
  }
}

