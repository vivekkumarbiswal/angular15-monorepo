import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormater',
})
export class CurrencyFormaterPipe implements PipeTransform {
  transform(value: number) {
    return '₹' + value.toLocaleString('en-IN');
  }
}
