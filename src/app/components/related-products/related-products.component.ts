import { Component } from '@angular/core';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss',
})
export class RelatedProductsComponent {
  cards = [1, 2, 3, 4];
}
