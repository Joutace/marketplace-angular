import { Component } from '@angular/core';
import { BreadcrumbsComponent } from "../../components/breadcrumbs/breadcrumbs.component";
import { RelatedProductsComponent } from "../../components/related-products/related-products.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [BreadcrumbsComponent, RelatedProductsComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
