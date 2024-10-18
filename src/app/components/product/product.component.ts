import {
  CommonModule,
  NgOptimizedImage,
  ViewportScroller,
} from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  inject,
  Input,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProductData } from '../../interfaces/common.interface';
import { PricePipe } from '../../pipes/price.pipe';
import { ProductService } from '../../services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, PricePipe, NgOptimizedImage, ProductDetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  @Input() productId: string = '';
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private viewport = inject(ViewportScroller);
  protected _mainImage = signal('');
  protected _selectedColor = signal('#816DFA');
  protected _selectedSize = signal('');
  protected productAmount = 1;

  productData$: Observable<IProductData> | undefined;

  socials = [
    'assets/icons/fb.svg',
    'assets/icons/in.svg',
    'assets/icons/tt.svg',
  ];
  constructor() {
    this.route.params.subscribe((val) => this.getProductById());
  }

  ngOnInit(): void {}

  getProductById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = id ?? '1';
    this.productData$ = this.productService.getProductById(this.productId).pipe(
      map((response) => {
        console.log(response);
        this._mainImage.set(response.images[0]);
        this.productService._productData.set(response);
        return response;
      })
    );
  }

  addToCart(id: string, price: number) {
    const payload = {
      id: id,
      color: this._selectedColor(),
      size: this._selectedSize(),
      price,
      amount: this.productAmount,
    };
    console.log(payload);
  }

  expandImg(src: string) {
    this._mainImage.set(src);
  }

  setColor(color: string) {
    this._selectedColor.set(color);
  }

  selectSize(size: string) {
    this._selectedSize.set(size);
  }
}
