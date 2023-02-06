import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {

  form:any
  citta:string[] =['Milano','Roma','Torino','Firenze']
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      firstName:["",Validators.maxLength(20)],
      lastName:["",Validators.maxLength(20)],
      gender:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      phone:[""],
      giorno:["",[Validators.min(1),Validators.max(31)]],
      mese:["",[Validators.min(1),Validators.max(12)]],
      anno:["",[Validators.min(1900),Validators.max(2023)]],
      city:["",[Validators.required]],

      password:["",[Validators.minLength(8)]],
      confermaPassword:[""]
    })
  }

}
