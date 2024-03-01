
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { CustomerComponent } from '../customer.component';


@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, CustomerComponent, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  isAuthenticated!: boolean;
  flag = false;
  localData: any;
  submitted = false;
  username!: string;
  constructor(private router: Router) { }

  forgot(name: any) {
    let data: any = localStorage.getItem('data');
    this.localData = JSON.parse(data);

    for (let i = 0; i < this.localData.length; i++) {
      if (name == this.localData[i].emailid) {
        Swal.fire("Thank You...", 'Reset Link Sent to Mail', 'success');
        this.flag = true;
      }
    }
    if (this.flag == false) {
      Swal.fire("Oops...", 'Email Id Does not exist, Register yourself first', 'error');
    }
  }
}