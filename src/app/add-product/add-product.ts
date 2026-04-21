import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product-service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control(''),
      price: this.fb.control(0), // ← number, pas string '0'
      selected: this.fb.control(false),
    });
  }

  protected saveProduct() {
    const product: Product = {
      id: 0,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      selected: this.productForm.value.selected,
    };
    this.productService.saveProduct(product);
  }
}
