import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mi sed nisl mollis consequat non nec eros. Aenean cursus, purus in blandit lacinia, erat mi rutrum nisi. <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mi sed nisl mollis consequat non nec eros. Aenean cursus, purus in blandit lacinia, erat mi rutrum nisi, at condimentum elit nisl a nunc. Aliquam erat volutpat. Sed id vehicula eros. Nulla facilisi. Donec efficitur, tortor a sollicitudin elementum, ipsum metus feugiat massa, non lobortis ipsum tellus at elit. Quisque nec efficitur dui. Morbi auctor, sem et cursus interdum, est eros tincidunt nisi, id iaculis ligula eros a enim. Nunc id.';
}
