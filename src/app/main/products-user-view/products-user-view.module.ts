import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductsUserViewPageComponent } from './pages/products-user-view-page/products-user-view-page.component';
import { ProductsUserFiltersComponent } from './components/products-user-filters/products-user-filters.component';
import { ProductsUserViewListComponent } from './components/products-user-view-list/products-user-view-list.component';
import { ProductsUserViewRoutingModule } from './products-user-view-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

  
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
  

@NgModule({
  declarations: [
    ProductsUserViewPageComponent,
    ProductsUserFiltersComponent,
    ProductsUserViewListComponent
  ],
  imports: [
    CommonModule,
    ProductsUserViewRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  providers: [CurrencyPipe]
})
export class ProductsUserViewModule { }
