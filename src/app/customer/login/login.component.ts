import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CustomerComponent } from '../customer.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,CustomerComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{

  isAuthenticated!:boolean;
  submitted = false;
  username!:string;
  signed:boolean=false;
  it!:string;
  localData:any;
  flag = false;
  
  constructor(private router:Router){}

  ngOnInit():void{

  }

  show(){
    let data:any = localStorage.getItem('data');
    this.localData = JSON.parse(data);

    for(let i = 0;i < this.localData.length; i++){
      console.log(this.localData[i]);
    }
  }

  login(name:any,password:any)
  {
    this.submitted = true;  
    this.username = name;

    // if(name=="sm12@gmail.com" && password=="sovon123@")
    // {
    //   Swal.fire("Thank You...",'Login Successful','success');
    //   this.isAuthenticated = true;
    //   this.router.navigate(["../../fooddetails/home"]); 
    // }

    let data:any = localStorage.getItem('data');
    this.localData = JSON.parse(data);

    for(let i = 0;i < this.localData.length; i++){
      if(name == this.localData[i].emailid && password == this.localData[i].password)
      {
        Swal.fire("Thank You...",'Registration Successful','success');
        this.isAuthenticated = true;
        this.router.navigate(["/fooddetails/home"]); 
        this.flag = true
      }
    }
    
    if(this.flag == false)
    {
      Swal.fire("Oops...",'Please Provide Correct Username/Password','error');
      this.isAuthenticated = false;
      // this.router.navigate(["../customer/deny"]);
    }
    
  }
  
}