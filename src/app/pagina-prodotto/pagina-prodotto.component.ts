import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Prodotto } from '../prodotto/prodotto';

@Component({
  selector: 'app-pagina-prodotto',
  templateUrl: './pagina-prodotto.component.html',
  styleUrls: ['./pagina-prodotto.component.css']
})
export class PaginaProdottoComponent {

  loading:boolean=true
  prodotto!:Prodotto
  
  constructor(private api:ApiService, private router:ActivatedRoute) { 
    const id = router.snapshot.paramMap.get('id')
    if(id){
      this.api.getSingleProduct(id).subscribe((res)=>{
        this.prodotto=res
        this.loading=false
      })
    }
  }


}
