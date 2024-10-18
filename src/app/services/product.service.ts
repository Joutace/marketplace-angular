// product.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductData } from '../interfaces/common.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  public _productData = signal<IProductData | null>(null);

  private http = inject(HttpClient);

  getProducts(): Observable<IProductData[]> {
    return this.http.get<IProductData[]>(this.apiUrl);
  }

  getProductById(id: string) {
    return this.http.get<IProductData>(`${this.apiUrl}/${id}`);
  }
}
