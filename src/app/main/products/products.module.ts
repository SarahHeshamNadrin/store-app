import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsRoutingModule } from './products-routing.module';
  
@NgModule({
  declarations: [
    ProductsListPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
