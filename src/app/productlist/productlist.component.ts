import { Component, OnInit } from '@angular/core';
import { products } from '../productlist'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  products = products;

  ngOnInit() {
  }
  share(){
    alert("shared")
  }
  onNotify(){
    alert("saled")
  }


}
