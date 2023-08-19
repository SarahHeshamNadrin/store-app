import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { RoleGuard } from './auth/guards/role.guard';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./main/login/login.module').then(m => m.LoginModule)},
  {path: 'admin/products', loadChildren: () => import('./main/products/products.module').then(m => m.ProductsModule),  canActivate: [AuthGuard, RoleGuard]},
  {path: 'user/products', loadChildren: () => import('./main/products-user-view/products-user-view.module').then(m => m.ProductsUserViewModule), canActivate: [AuthGuard, RoleGuard]},
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
