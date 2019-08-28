import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { products } from '../productlist';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(
    private route:ActivatedRoute,
    private cartService:CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parms =>{
      this.product = products[+parms.get('productId')]
    })
  }
  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
    console.log(this.product)
  }

}
