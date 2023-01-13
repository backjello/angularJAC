import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CarrelloStorageService } from '../carrello-storage.service';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrls: ['./carello.component.css']
})
export class CarelloComponent {

  constructor(
    private dialogRef:MatDialogRef<CarelloComponent>,
    private carrelloService:CarrelloStorageService) { }

  svuotaCarrello(){
    this.carrelloService.svuota()
  }

  chiudi(){
    this.dialogRef.close()
  }


}
