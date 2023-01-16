import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CarelloComponent } from '../carello/carello.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ricerca:string | null = ""

  constructor(private dialog: MatDialog, private router: ActivatedRoute) {
    this.ricerca = router.snapshot.paramMap.get('ricerca')
    console.log(this.ricerca);
  }

  ngOnInit(): void {
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
