import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 10.99, selected: false },
    { id: 2, name: 'Product 2', price: 20.99, selected: true },
    { id: 3, name: 'Product 3', price: 30.99, selected: false },
    { id: 4, name: 'Product 4', price: 40.99, selected: true },
  ];

  selectedProducts: number = 0;
  total: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.computeSelectedProduct();
  }

  computeSelectedProduct() {
    this.selectedProducts = this.products.filter((product) => product.selected).length;
    this.total = this.products
      .filter((product) => product.selected)
      .reduce((sum, current) => sum + current.price, 0);
  }
  protected select(product: Product) {
    product.selected = !product.selected;
    this.computeSelectedProduct();
  }
}
