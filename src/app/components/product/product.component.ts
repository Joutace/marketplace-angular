import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  protected _mainImage = signal('');
  protected _selectedColor = signal('#816DFA');
  protected _selectedSize = signal('');

  sizes = ['XP', 'P', 'G', 'XG'];
  colors = ['#816DFA', '#000000', '#B88E2F'];
  amount = 1;
  elementClicked = 'Click any of the list item below';

  images = [
    'assets/product/sofa-1.png',
    'assets/product/sofa-2.png',
    'assets/product/sofa-3.png',
    'assets/product/sofa-4.png',
  ];
  ngOnInit(): void {
    //TODO: Fetch images from API
    this._mainImage.set(this.images[0]);
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
