import { Route } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { FoodiefoodieComponent } from './foodiefoodie/foodiefoodie.component';

export const CUST_ROUTE: Route[] = 
[
  {
   path:'login',
   loadComponent:() => import('./login/login.component').then((c) => c.LoginComponent),
  },
  { 
    path:'register',
    loadComponent: () => import('./register/register.component').then((c) => c.RegisterComponent)
  },
  { path:'forgot',component:ForgotComponent},
  {path:'intro',component:FoodiefoodieComponent}


];