import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceText'
})
export class ReduceTextPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    var max = args[0] // numero di caratteri da mostrare

    if(value.length < max){
      return value
    }
    else{
      var risultato 
      risultato = value.slice(0,max) + "..."
    }

    return risultato;
  }

}
