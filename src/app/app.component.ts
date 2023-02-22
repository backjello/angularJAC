import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 constructor(){
  const a = {id:3,prezzo:5}
  const b = {id:3,sconto:10}
  const c = {...a,...b}
  console.log(c);
  
 }


}
