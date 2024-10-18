import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: { type: string; amount: number }): string {
    let finalPrice = price;

    console.log(price, discount);
    discount.type === 'PERCENTAGE'
      ? (finalPrice = price - (price * discount.amount) / 100)
      : (finalPrice = price - discount.amount);

    return finalPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
