import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = [
    new Product(1, 'Lego Movie', 9.99, 'https://heroichollywood.b-cdn.net/wp-content/uploads/2017/02/the_lego_movie_2014-wide__140206192640.jpg?x42694'),
    new Product(2, 'DeadWood', 25.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VOWr08jGonydjiAVqPeajEly_w1WfmmaJFAZBThbUBlW7Vvm'),
    new Product(3, 'Die Hard', 13.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmDn6tUKDhDqyZAUfjEjNq-8lJ8FUddGqgZBeWObkIsF3TWjEbg'),
    new Product(4, 'Star Wars', 12.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeurTvSRu5Aav4sSHlhLqKq_M_mPka13DQMkAA1fI_EFk9pXJ8GA'),
    
    new Product(5, 'Tron', 8.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8c_tPNDZX8FAVc9lyX-AnC6U8utOucQf8ffI9-AxVce3so5x0jA'),
    
  ];

  constructor(private _productService: ProductService) {
    this._productService.updateProducts(this.products);
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }
}
