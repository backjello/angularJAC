import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-canecard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './canecard.component.html',
  styleUrls: ['./canecard.component.css']
})
export class CanecardComponent implements OnInit {

  @Input()cane:any={}
  @Output()elimina: EventEmitter<any> =
  new EventEmitter()

  salvato:boolean=false

  constructor(private localStorage:LocalstorageService) { 

  }

  ngOnInit(): void {
    // console.log(this.cane)
    const caneSalvato = 
    this.localStorage.read('cane')
    console.log(caneSalvato)
    if(caneSalvato.nome == this.cane.nome)
      this.salvato=true
  }
  cambiaNome(){
    this.cane.nome='nomeAcaso'
  }
  eliminaCane(){
    this.elimina.emit()
  }
  salvaCane(){
    this.localStorage.save(this.cane,'cane')
    this.salvato=true
  }
}
