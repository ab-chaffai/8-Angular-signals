import { Component, computed, OnInit, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-products-with-signals',
  standalone: false,
  templateUrl: './products-with-signals.html',
  styleUrl: './products-with-signals.css',
})
export class ProductsWithSignals implements OnInit {
  products = signal<Product[]>([]);

  selectedProducts = computed<number>(
    () => this.products().filter((product) => product.selected).length,
  );
  total = computed<number>(() =>
    this.products()
      .filter((product) => product.selected)
      .reduce((sum, current) => sum + current.price, 0),
  );

  constructor() {}

  ngOnInit(): void {
    this.products.set([
      { id: 1, name: 'Product 1', price: 10.99, selected: false },
      { id: 2, name: 'Product 2', price: 20.99, selected: true },
      { id: 3, name: 'Product 3', price: 30.99, selected: false },
      { id: 4, name: 'Product 4', price: 40.99, selected: true }
    ]);
  }
  protected select(product: Product) {
    this.products.update((prods) => {
      return prods.map((p) => (p.id === product.id ? { ...p, selected: !p.selected } : p));
    });
  }
}
