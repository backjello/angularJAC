import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/componentes/prodotto/prodotto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodotti: Prodotto[] = []
  prodottiFiltrati: Prodotto[] = []
  loading: boolean = true
  categoria: string | null = ''

  constructor(
    private api: ApiService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  aggiornaProdotti(filtrati: Prodotto[]) {
    console.log(filtrati);
    
    this.prodottiFiltrati = filtrati
  }


  ngOnInit(): void {

    this.categoria = this.route.snapshot.paramMap.get('categoria')

    if(this.categoria=='' || this.categoria==null){ // in questo caso prendo tutti i prodotti
      this.api.getProducts().subscribe((data) => {
        console.log(data)
        this.prodotti = data.products
        //non ci sono filtri quindi mostro tutti i prodotti
        this.prodottiFiltrati = data.products
        this.loading = false
      })
    }
    else{ // mi viene passata una categoria, vado a filtrare per quella categoria
      this.api.getProductsOfCategory(this.categoria).subscribe((res)=>{
        this.prodottiFiltrati=res.products
        this.api.getProducts().subscribe((data)=>{
          this.prodotti = data.products
          this.loading = false
        })
      })
    }
  }
}
