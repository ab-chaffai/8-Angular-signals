import { Component, computed, signal } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = computed<Product[]>(() => this.productService.getAllProducts());
  selectedProducts = signal<Product[]>([]);

  constructor(private productService: ProductService) {}

  protected select(product: Product) {
    this.productService.selectProduct(product);
  }

  protected delete(product: Product) {
    this.productService.deleteProduct(product);
  }
}
