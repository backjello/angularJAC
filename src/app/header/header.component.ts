import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarelloComponent } from '../carello/carello.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  apriModal(tipo:string){
    //tipo mi indica se apro il carrello o i preferiti
    this.dialog.open(CarelloComponent,{
      minWidth:"80%",
      data:{
        tipo:tipo
      }
    })
  }

}
