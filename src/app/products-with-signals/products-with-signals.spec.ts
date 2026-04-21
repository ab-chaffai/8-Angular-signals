import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithSignals } from './products-with-signals';

describe('ProductsWithSignals', () => {
  let component: ProductsWithSignals;
  let fixture: ComponentFixture<ProductsWithSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsWithSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsWithSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
