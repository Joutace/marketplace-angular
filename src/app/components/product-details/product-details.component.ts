import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, inject, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductData } from '../../interfaces/common.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements AfterViewInit {
  @Input({ required: true })
  productData!: IProductData;

  public _selectedComponent = signal('description');
  public _productData = signal(this.productData);

  ngAfterViewInit() {
    this._productData.set(this.productData);
  }
}
