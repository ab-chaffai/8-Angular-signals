import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsState = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.productsState.set([
        { id: 1, name: 'Product 1', price: 10.99, selected: false },
        { id: 2, name: 'Product 2', price: 20.99, selected: true },
        { id: 3, name: 'Product 3', price: 30.99, selected: false },
        { id: 4, name: 'Product 4', price: 40.99, selected: true },
      ]);
    });
  }

  getAllProducts() {
    return this.productsState();
  }

  public selectProduct(product: Product) {
    this.productsState.update((products) =>
      products.map((p) => (p.id === product.id ? { ...p, selected: !p.selected } : p)),
    );
  }

  public deleteProduct(product: Product) {
    this.productsState.update((state) => state.filter((p) => p.id !== product.id));
  }

  saveProduct(product: Product) {
    product.id = new Date().getTime();
    this.productsState.update((state) => [...state, product]);
  }
}
