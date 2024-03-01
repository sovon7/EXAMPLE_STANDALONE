import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FooddetailsComponent } from '../fooddetails.component';
import { FormsModule } from '@angular/forms';
import { Product, ProductsService } from '../products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule,RouterModule,FooddetailsComponent,FormsModule],
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent 
{

  
  allProduct!: Product[];
  productListToDisplay: Product[] = []
  displaysearch: boolean = false;
  searchedProduct!: Product;
  searchText!: string;
  errorMessage!: string;
  showError: boolean = false;
  totalAmount: number = 0;
  searchmed!:any;

  cart:Product[] = [];

  //Inject the Router and ProductsService object to the constructor
  constructor(private activeRoute:ActivatedRoute,private productService:ProductsService,private route:Router) {

  }

  ngOnInit() 
  {
    let oldCart:any = localStorage.getItem('cart');
    let cart = JSON.parse(oldCart);
    // this.allProduct = this.productService.products;
    this.productListToDisplay = cart;
    if(cart == null || this.productListToDisplay.length == 0){
      Swal.fire('No product','Back to product','error');
      this.route.navigate(['/fooddetails/products'])
    }
   // console.log(this.productListToDisplay)
    this.totalAmount=0;
    this.productListToDisplay.forEach((product)=>{
        this.totalAmount += product.Price;
    })
   // console.log(this.totalAmount);
    localStorage.setItem('totalAmount',JSON.stringify(this.totalAmount));
    console.log(cart)
  }
  
  remove(p:number)
  {
    Swal.fire
    (
      {
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    
      }
    ).then(
      (result) => 
      {
        if (result.isConfirmed) 
        {
          let oldCart:any = localStorage.getItem('cart');
          let cart = JSON.parse(oldCart);
          cart.splice(p,1);
          localStorage.setItem('cart',JSON.stringify(cart));
          Swal.fire(
            'Deleted!',
            'Item has been deleted.',
            'success'
        );
        this.ngOnInit();
      }
    }) 
  }
}