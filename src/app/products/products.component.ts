import { Component, OnInit } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product = {
    id: 3,
    product_name: "Tulips",
    product_description: "Ugly flower",
    product_price: 3,
    product_image: "https://icon2.kisspng.com/20180202/ojw/kisspng-houseplant-dragon-tree-dracaena-fragrans-light-green-plants-potted-large-leaves-deductible-png-5a745517613358.6543659415175733993981.jpg",
    createdAt: "today",
    updatedAt: "today",
    userUid: "YoMama"
  };

  constructor() { }

  ngOnInit() {
  }

}
