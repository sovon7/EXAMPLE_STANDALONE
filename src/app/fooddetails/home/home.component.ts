import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooddetailsComponent } from '../fooddetails.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooddetailsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  Benefits: string =
    'Eating a healthy diet has many health benefits including maintaining optimal weight, preventing disease, and boosting your mood.';

  Importance: string =
    'Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes.';

  Need: string =
    'A food is something that provides nutrients. Nutrients are substances that provide: energy for activity, growth, and all functions of the body such as breathing, digesting food, and keeping warm; materials for the growth and repair of the body, and for keeping the immune system healthy.';

  constructor() {}

  ngOnInit() {}
}
