import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Hello " + value + " 🔔";
  }

}

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, factor: number):number{
    return value * factor;
  }
}

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: string[], searchText: string): string[] {
    console.log("Filter pipe running...");
    return items.filter(item => 
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

@Pipe({
  name: 'minInvestment'
})
export class MinInvestment implements PipeTransform{
  transform(value: number): string {
    if(!value){
      return '';
    }
    if(value >= 10000000){
      return '₹' + (value / 10000000) + 'Cr';
    }
    if(value >= 100000){
      return '₹' + (value / 100000) + 'L';
    }

    return '₹' + value.toLocaleString('en-IN');
  }
}