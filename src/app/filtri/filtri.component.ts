import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-filtri',
  templateUrl: './filtri.component.html',
  styleUrls: ['./filtri.component.css']
})
export class FiltriComponent {

  form = this.fb.group({
    brand:[""],
    category:[""],
    minPrice:["",Validators.min(0)],
    maxPrice:["",Validators.min(0)],
    rating:["",[Validators.min(1),Validators.max(5)]]
  })

  constructor(private fb:FormBuilder,private api:ApiService) {

    this.api.getCategories()

   }




  login(){
    console.log(this.form.value);
  }
}
