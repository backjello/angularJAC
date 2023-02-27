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

  @Input() testoBottone: string = 'scarica PDF'
  @Input() data: Prodotto[] = []
  @Input() colonneDaMostrare: { nome: string, key: string }[] = [] // colonne da mostrare nella tabella del PDF
  @Input() titolo: string = "" // titolo del PDF

  constructor() { }

  generaTabella() {
    var tabella: any = {}
    var header: string[] = [] // intestazione della tabella
    this.colonneDaMostrare.forEach((colonna) => {
      header.push(colonna.nome)
    });
    var tableBody: any[] = []
    this.data.forEach((prodotto: any) => {
      var riga: any[] = []
      this.colonneDaMostrare.forEach((colonna) => {
        riga.push(prodotto[colonna.key])
      })
      tableBody.push(riga)
    });
    var body = [...[header], ...tableBody]
    tabella.body = body
    tabella = {
      table : tabella,
      headerRows: 1,
      widths: [300, '*',],
      noBorders: false,
      style:'table' 
    }
    return tabella
  }

  scaricaPDF() {

    var tabella = this.generaTabella()

    var document = {
      info: {
        title: this.titolo
      },
      content: [tabella],
      // styles:{ 
      //   table: { // come "classe" in css
      //     margin: <Margins>[0, 0, 0, 10] 
      //   }
      // }
    }
    pdfMake.createPdf(document).open()
  }

}
