import { Component, Input } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  @Input()
  product : ProductRepresentation={};

}
