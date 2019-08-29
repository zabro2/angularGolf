import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName'
})
export class PlayerNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
