
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CustomerComponent } from '../customer.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterModule,CustomerComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  registerForm!:FormGroup;
  phnFlag!: boolean;
  nmFlag!: boolean;
  emailFlag!: boolean;
  passFlag!: boolean;
  data : any;


  constructor(private formBuilder:FormBuilder, private router: Router){}
  ngOnInit()
  {
      this.registerForm = this.formBuilder.group({
        fullName:['',[Validators.required,Validators.pattern("([A-Z][a-z]{1,})( [A-Z][a-z]{1,})")]],
        emailid:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password:['',[Validators.required,Validators.pattern(".*[\\W].*")]],
        // password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,20}$")]],
        phnNum:['',[Validators.required,Validators.max(9999999999),Validators.min(1111111111)]]
      })
  }

  // arrayInput:any[] = []

  saveData()
  {
    let arrayInput:any = localStorage.getItem('data');
    let users = JSON.parse(arrayInput);
    if(users == null){
      users = []
    }
    users.push(this.registerForm.value);
    localStorage.setItem('data',JSON.stringify(users));
    Swal.fire("Thank You...",'Registration Successful','success');
    // this.router.navigate(["../customer/login"]);
    this.registerForm.reset();
  }

  // loadData(){
  //   let localData:any = localStorage.getItem('data');
  //   this.data = JSON.parse(localData);
  //   console.log(this.data);
  // }

  onPhn(){
    this.phnFlag = true;
    this.nmFlag = false;
    this.emailFlag = false;
    this.passFlag = false;
  }
  onName(){
    this.phnFlag = false;
    this.nmFlag = true;
    this.emailFlag = false;
    this.passFlag = false;
  }
  onPass(){
    this.phnFlag = false;
    this.nmFlag = false;
    this.emailFlag = false;
    this.passFlag = true;
  }
  onMail(){
    this.phnFlag = false;
    this.nmFlag = false;
    this.emailFlag = true;
    this.passFlag = false;
  }


}