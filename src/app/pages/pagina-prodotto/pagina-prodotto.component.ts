import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from 'src/app/componentes/prodotto/prodotto';
import { Recensione } from 'src/app/componentes/recensione/recensione';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pagina-prodotto',
  templateUrl: './pagina-prodotto.component.html',
  styleUrls: ['./pagina-prodotto.component.css']
})
export class PaginaProdottoComponent {

  loading: boolean = true
  prodotto!: Prodotto
  immagini: any[] = []
  recensioni:Recensione[]=[]

  constructor(private api: ApiService, private router: ActivatedRoute) {
    const id = router.snapshot.paramMap.get('id')
    if (id) {
      this.api.getSingleProduct(id).subscribe((res) => {
        this.prodotto = res
        this.prodotto.images.forEach((img) => {
          this.immagini.push({
            image: img,
            thumbImage: img
          })
        })
        this.api.getRecensioni().subscribe((data) => {
          this.recensioni = data.comments
          console.log(this.recensioni);
        })
        console.log(this.immagini);
        this.loading = false
      })
    }
  }


}
