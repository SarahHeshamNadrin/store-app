import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'products', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./main/login/login.module').then(m => m.LoginModule)},
  {path: 'products', loadChildren: () => import('./main/products/products.module').then(m => m.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
