import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {

  form:any // la nostra form con i campi da compilare
  submitted:boolean = false // sarà false finche l'utente non fa la submit
  registazioneOK:boolean = false // sarà true quando l'utente si sarò registrato con successo
  nome:string = "" // nome dell'utente che usiamo quando la registrazione è avvenuta con successo
  mail:string = "" // mail dell'utente che usiamo quando la registrazione è avvenuta con successo
  citta:string[] =['Milano','Roma','Torino','Firenze']
  
  constructor(
    private fb: FormBuilder,
    private api:ApiService){ 

      if(true){ // se l'utente è loggato (per il momento mettiamo true)
        const IdUtente = 1 //per ora metto 1 ma poi prenderò l'id corretto in base alla login
        this.api.getUtente(IdUtente).subscribe((res)=>{
          console.log(res)
        })
      }

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
      privacy:["",[Validators.requiredTrue]],

      password:["",[Validators.minLength(8)]],
      confermaPassword:[""]
    })
  }

  submit(){
    this.submitted = true
    if(!this.form.invalid){
      const form = this.form.value
      form.address = { city: form.city }
      const date = form.anno + "-" + form.mese + "-" + form.giorno
      form.birthDate = date
      // cancello i campi che non servono al back-end
      delete form.city
      delete form.privacy
      delete form.confermaPassword
      delete form.giorno
      delete form.mese
      delete form.anno
      console.log(form);
      this.api.registrazione(form).subscribe((res)=>{
        console.log(res)
        this.registazioneOK = true
        this.nome = res.firstName
        this.mail = res.email
      })
    }
  }

  getField(nome:string){
    return this.form.controls[nome]
  }

}
