import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationRace'
})
export class LocationRacePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let res = "";

    for (let i=0; i < value.length; i++){
      res+= value[i].toUpperCase() +'.'; 
    }
    return res;
  }

}
