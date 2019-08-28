import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path:'',component:ProductlistComponent, pathMatch :'full'},
  {path:'products/:productId', component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path: 'store',component:ProductlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
