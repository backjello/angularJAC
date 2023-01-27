import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CarelloComponent } from '../carello/carello.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ricerca:string | null = ""

  constructor(
    private dialog: MatDialog, 
    private route: ActivatedRoute,
    private router:Router) {
  }

  cerca(){
    console.log(this.ricerca)
    this.router.navigate(['/home/'+this.ricerca])
  }

  apriModal(tipo: string) {
    //tipo mi indica se apro il carrello o i preferiti
    this.dialog.open(CarelloComponent, {
      minWidth: "80%",
      data: {
        tipo: tipo
      }
    })
  }

}
