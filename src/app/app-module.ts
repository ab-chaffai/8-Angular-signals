import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Product } from './product/product';
import { Products } from './products/products';
import { ProductsWithSignals } from './products-with-signals/products-with-signals';
import { ProductList } from './product-list/product-list';
import { DashBoard } from './dash-board/dash-board';
import { AddProduct } from './add-product/add-product';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Product, Products, ProductsWithSignals, ProductList, DashBoard, AddProduct],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
