import { computed, Injectable, signal } from '@angular/core';
import { ICartPayload } from '../interfaces/common.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  totalValue = computed(() =>
    this.products().reduce((acc, produto) => {
      return acc + produto.price * produto.amount;
    }, 0)
  );
  products = signal<ICartPayload[]>([]);

  public addProduct(payload: ICartPayload) {
    this.products.update((arr) => {
      return [...arr, payload];
    });
  }

  public removeProduct(index: number) {
    this.products.update((arr) => {
      return arr.slice(index, 1);
    });
  }
}
