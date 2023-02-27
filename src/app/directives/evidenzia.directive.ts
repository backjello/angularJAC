import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]'
})
export class EvidenziaDirective implements OnInit{

  @Input() appEvidenzia : string = ""  // stesso nome della direttiva

  constructor(private element:ElementRef) { 
  }
  
  ngOnInit(): void {
    console.log(this.appEvidenzia)
    if(this.appEvidenzia != ""){
      this.element.nativeElement.style.backgroundColor = this.appEvidenzia
    }
    else{
      this.element.nativeElement.style.backgroundColor = 'yellow'
    }
  }

}
