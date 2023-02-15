import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-utenteheader',
  templateUrl: './utenteheader.component.html',
  styleUrls: ['./utenteheader.component.css']
})
export class UtenteheaderComponent {

  constructor(private localStorage: LocalstorageService, private router:Router) {}

  logout(){
    this.localStorage.save('','utente')
    this.localStorage.save('','token')
    // compatibilità con browser
    localStorage.removeItem('utente')
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }

  get utente(){
    return this.localStorage.read('utente')
  }

}
