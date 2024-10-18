import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  transform(value: number | string): string {
    if (value == null) return 'R$ 0,00';

    const parsedValue = typeof value === 'string' ? parseFloat(value) : value;

    return parsedValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
