import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooddetailsComponent } from '../fooddetails.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,FooddetailsComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent 
{

  constructor() { }
  aboutUsDetail="We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up for a scrumptious dinner utilizing the best and freshest ingredients.This Company is legacy comes from The parent  Restaurant, which was built in 1963.FoodieFoodie worked for people in general and has advanced into a combination of exquisite chic and contemporary fine charge.Enjoy our dazzling dishes and make the most of your eating background with us!";
  
  awards:string[]=["Great Taste Award , sponsered by Guild of Fine Food awards.Foods that are tasty, authentic, and responsibly produced.In India, the Food sector has emerged as a high-growth and high-profit sector due to its immense potential for value addition, particularly within the food processing industry, accounting for about 32 percent of the country’s total food market."];
  
  ngOnInit() {
  }

}