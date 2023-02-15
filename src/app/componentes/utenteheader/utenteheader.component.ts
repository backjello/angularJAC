import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-utenteheader',
  templateUrl: './utenteheader.component.html',
  styleUrls: ['./utenteheader.component.css']
})
export class UtenteheaderComponent {

  utente:any={}

  constructor(private localStorage:LocalstorageService) {
    this.utente = this.localStorage.read('utente')
  }



}
