import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from '../customer.component';

@Component({
  selector: 'app-foodiefoodie',
  standalone: true,
  imports: [CommonModule,RouterModule,CustomerComponent],
  templateUrl: './foodiefoodie.component.html',
  styleUrls: ['./foodiefoodie.component.css']
})
export class FoodiefoodieComponent {

}
