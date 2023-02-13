import { Component, Input, OnInit } from '@angular/core';
import { Recensione } from './recensione';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.css']
})
export class RecensioneComponent{

  @Input() data!:Recensione
  date:string
  stelle:number

  constructor() {
    // voglio un numero fra 0,5 e 5 
    this.stelle = Math.round(Math.random()*4)
    if(Math.random() > 0.5)
      this.stelle += 0.5
    else
      this.stelle += 1


    //genero giorno, anno e mese a caso
    const anno =  Math.round(Math.random()*13)+2010 //2010-2023
    const mese =  Math.round(Math.random()*11) // 0-11
    const giorno = Math.round(Math.random()*30)+1 // 1-31
    const dataTemp = new Date(anno,mese,giorno,0,0,0,0) 

    this.date = dataTemp.toLocaleDateString() // 02/05/2020

    console.log(dataTemp)
  }

  arrotondaEccesso(val:number):number{
    // 4 -> 4 , 4.5 -> 5
    return Math.round(val)
  }

  arrotondaDifetto(val:number):number{
    // 4 -> 4 , 4.5 -> 4
    return Math.trunc(val)
  }

  getDecimale(val:number):number{
    // 4 -> 0 , 4.5 -> 0.5
    return val % 1
  }











}
