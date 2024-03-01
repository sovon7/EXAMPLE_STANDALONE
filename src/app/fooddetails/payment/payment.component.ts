import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FooddetailsComponent } from '../fooddetails.component';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../products/products.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,RouterModule,FooddetailsComponent],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent 
{
  productListToDisplay: Product[] = []
  paymentForm!:FormGroup;
  totalAmount!: number

  constructor(private formBuilder:FormBuilder,private router: Router){}

  ngOnInit() 
  {
    let amount:any = localStorage.getItem('totalAmount');
    this.totalAmount = JSON.parse(amount);
  }

  payment()
  {
    Swal.fire("Thank You...",this.totalAmount+' Rupees Payed Successful','success');
    this.router.navigate(['/fooddetails/products'])
    
          /* After Payment, Cart should be Empty  
          *               &
          *  if again hit button then it will go to Product page
          */

    let oldCart:any = localStorage.getItem('cart');
    let cart = JSON.parse(oldCart);
    localStorage.removeItem('cart');

    this.productListToDisplay = cart;
    if(cart == null || this.productListToDisplay.length == 0){
      Swal.fire('No product','Back to product','error');
      this.router.navigate(['/fooddetails/products'])
    }

  }

  backTOcart(){
      this.router.navigate(['/fooddetails/addtocart'])
  }

}
