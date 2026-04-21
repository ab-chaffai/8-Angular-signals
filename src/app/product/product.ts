import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  price: number = 8000;
  quantity = signal<number>(1);
  total = computed(()=> this.price * this.quantity());
  counter = signal(0);

  constructor() {
    effect(() => {
      console.log('The Quantity is: ', this.quantity());
      console.log('The Total is: ', this.total());
      this.counter.set(4);
      console.log('The Counter (counter is a writable signal): ', this.counter());
    });
  }

  protected increment() {
    this.quantity.update(value => value + 1);
    // this.quantity.set(this.quantity() + 1);
    // this.total = this.price * this.quantity;
  }

  protected decrement() {
    if (this.quantity() > 1) {
      this.quantity.update((value) => value - 1);
      // this.quantity.set(this.quantity() - 1);
      // this.total = this.price * this.quantity;
    }
  }
}
