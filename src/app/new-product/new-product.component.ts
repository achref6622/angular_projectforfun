import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
product : ProductRepresentation ={} 
constructor (private service : ProductService,private router:Router){

}

saveproduct():void {
  this.service.createproduct(this.product).subscribe({
    next:(res)=>
    this.router.navigate(['products'])

  })
}
}
