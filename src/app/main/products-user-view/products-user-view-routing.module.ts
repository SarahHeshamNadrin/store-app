import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsUserViewPageComponent } from './pages/products-user-view-page/products-user-view-page.component';
  
const routes: Routes = [
  {path: '', component: ProductsUserViewPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsUserViewRoutingModule { }
