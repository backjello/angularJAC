import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeCase'
})
export class ChangeCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    var risultato
    var upperOrLower = args[0] // 'upper' oppure 'lower'

    if(upperOrLower == 'upper'){
      risultato = value.toUpperCase()
    }
    else if (upperOrLower == 'lower'){
      risultato = value.toLowerCase()
    }
    else{
      risultato = value
    }
    return risultato;
  }

}
