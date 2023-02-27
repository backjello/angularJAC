import { Component, Input } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Alignment, Margins } from 'pdfmake/interfaces';
import { Prodotto } from '../prodotto/prodotto';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-esporta-pdf',
  templateUrl: './esporta-pdf.component.html',
  styleUrls: ['./esporta-pdf.component.css']
})
export class EsportaPDFComponent {

  @Input() testoBottone:string = 'scarica PDF' 
  @Input() data:Prodotto[] = []
  @Input() colonneDaMostrare: { nome: string, key: string }[] = [] // colonne da mostrare nella tabella del PDF
  @Input() titolo:string = "" // titolo del PDF

  constructor() { }

  generaTabella(){
    var tabella = { body: [] } 
    var header = this.colonneDaMostrare // intestazione della tabella
    var tableBody = []
    this.data.forEach((prodotto:any) => {
      var riga: any[] = []
      this.colonneDaMostrare.forEach((colonna)=>{
        riga.push(prodotto[colonna.key])
      })
      console.log(riga)
    });
  }

  scaricaPDF(){

    var tabella = this.generaTabella()

    var document = {
      info: {
        title: this.titolo 
      },
      content : ['testo di prova'],
    }    
    pdfMake.createPdf(document).open()
  }

}
