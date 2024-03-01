import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fooddetails',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css'],
})
export class FooddetailsComponent {}
