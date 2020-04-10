
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'firstUpper'})
export class FirstUpperPipe implements PipeTransform {
  transform(value: string, seperator:string): string {
    var seperator = seperator || ' ';
    return value.toLowerCase().split(seperator).map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(seperator)
  }
  
}