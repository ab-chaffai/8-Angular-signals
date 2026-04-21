import { Component, computed } from '@angular/core';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-dash-board',
  standalone: false,
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css',
})
export class DashBoard {
  selectedProductCount = computed(
    () => this.productService.getAllProducts().filter((p) => p.selected).length,
  );
  totalPricesSelectedProducts = computed<number>(() => {
    return this.productService
      .getAllProducts()
      .filter((p) => p.selected)
      .reduce((sum, p) => sum + p.price, 0);
  });

  constructor(private productService: ProductService) {}
}
