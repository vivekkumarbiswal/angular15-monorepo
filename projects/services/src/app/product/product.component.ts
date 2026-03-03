import { Component } from '@angular/core';
import { ProductService } from '../dependencies/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
names: string[];

constructor(private productService: ProductService){
  this.names = this.productService.getNames();
}

}
