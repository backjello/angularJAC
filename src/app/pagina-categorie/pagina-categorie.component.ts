import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pagina-categorie',
  templateUrl: './pagina-categorie.component.html',
  styleUrls: ['./pagina-categorie.component.css']
})
export class PaginaCategorieComponent implements OnInit {

  categorie: string[] = []
  loading: boolean = true

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCategories().subscribe((res) => {
      this.categorie = res
      this.loading = false
    })
  }

}
