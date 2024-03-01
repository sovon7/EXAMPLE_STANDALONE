import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooddetailsComponent } from '../fooddetails.component';

import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from './products.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FooddetailsComponent,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements  OnInit
{

  allProduct!: Product[];
  productListToDisplay: Product[] = []
  displaysearch: boolean = false;
  searchedProduct!: Product;
  searchText!: string;
  errorMessage!: string;
  showError: boolean = false;
  searchmed!:any;

  constructor(private activeRoute:ActivatedRoute,private productService:ProductsService) {  }

  ngOnInit() 
  {
    this.allProduct = this.productService.products;
    this.productListToDisplay = this.allProduct
  }
  
  search() 
  {
    if (this.searchText) 
    {
      this.productListToDisplay = this.allProduct.filter(product => 
      {
        return product.name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1
      });
    
    } 
    else 
    {
      this.productListToDisplay = this.allProduct;
    }
  }

  addtocart(p: Product)
  {
    let oldCart:any = localStorage.getItem('cart');
    let cart = JSON.parse(oldCart);
    if(cart == null){
      cart = []
    }
    cart.push(p);
    localStorage.setItem('cart',JSON.stringify(cart));
    Swal.fire("Thank You...",'Product Add Successful','success');
    // console.log(cart);
  }

}