import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() data: { categoria: string, index: number } = {
    categoria: '',
    index: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
