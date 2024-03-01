import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

export const FOOD_ROUTE: Route[] = 
[
  { path:'home',component:HomeComponent },
  { path:'about',component:AboutComponent},
  { path:'products',component:ProductsComponent},
  { path:'addtocart',component:AddToCartComponent},
  { path:'payment',component:PaymentComponent}

];
