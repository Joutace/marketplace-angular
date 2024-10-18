import {
  CommonModule,
  NgOptimizedImage,
  ViewportScroller,
} from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IProductData } from '../../interfaces/common.interface';
import { ProductService } from '../../services/product.service';
import { PricePipe } from '../../pipes/price.pipe';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, PricePipe, DiscountPipe],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss',
})
export class RelatedProductsComponent {
  private productService = inject(ProductService);
  private router = inject(Router);
  private viewport = inject(ViewportScroller);

  productList$: Observable<IProductData[]> = this.productService
    .getProducts()
    .pipe(map((response) => response));

  async redirectPage(product: string) {
    await this.router.navigate([`index`, product]);
    this.viewport.scrollToPosition([0, 0]);
  }
}
