import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER } from '@angular/cdk/keycodes'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-formprodotto',
  templateUrl: './formprodotto.component.html',
  styleUrls: ['./formprodotto.component.css']
})
export class FormprodottoComponent {
  categorie: string[] = [];
  loading: boolean = true;
  form: any;
  inseritoConSuccesso: boolean=false;
  caratteristiche: string[] = ['Portatile', '14 pollici', 'WiFi'];
  separatorKeysCodes = [ ENTER ]
  
  constructor(private fb:FormBuilder, 
    private api:ApiService) { 
      this.api.getCategories().subscribe((res)=>{
        this.categorie = res
        this.loading= false
        this.form = this.fb.group({
          "title": ['',[Validators.maxLength(50)]],
          "description": ['',[Validators.maxLength(150)]],
          "price": ['',[Validators.min(0)]],
          "discountPercentage": ['',[Validators.min(0),Validators.max(100)]],
          "stock": ['',[Validators.min(0)]],
          "brand": ['',[Validators.maxLength(50)]],
          "category": ['',[Validators.required]],
          "caratteristica": ['']
        })
      })
  }
  
  add($event: MatChipInputEvent) {
    const caratterisca = $event.value
    if(caratterisca == '') return
    this.caratteristiche.push(caratterisca)
    this.form.controls['caratteristica'].setValue('')
  }

  remove(caratteristica:string) {
    const index = this.caratteristiche.indexOf(caratteristica)
    this.caratteristiche.splice(index,1)
  }

  submit() {
    if(this.form.invalid) return
    const data = this.form.value
    this.api.inserisciProdotto(data).subscribe((res)=>{
      this.inseritoConSuccesso = true
    })
  }
    
}
  