import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsRoutingModule } from './products-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule} from '@angular/material/paginator';  
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductsListContainerComponent } from './components/products-list-container/products-list-container.component';

@NgModule({
  declarations: [
    ProductsListPageComponent,
    ProductsListContainerComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    CurrencyPipe
  ]
})
export class ProductsModule { }
