import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOrString'
})
export class DateOrStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    var risultato
    try{
      risultato = formatDate(value,'dd/LL/y','en-us')
    }
    catch{
      risultato = value
    }
    return risultato;
  }

}
