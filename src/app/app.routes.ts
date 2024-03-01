import { Route } from '@angular/router';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'customer/intro',
    pathMatch: 'full',
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.route').then((m) => m.CUST_ROUTE),
  },
  {
    path: 'fooddetails',
    loadChildren: () =>
      import('./fooddetails/fooddetails.route').then((m) => m.FOOD_ROUTE),
  },
];
