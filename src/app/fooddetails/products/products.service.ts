import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';

export interface Product {
  name: string;
  // description: string;
  photoUrl: string;
  Price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  products: Product[] = [
    {
      name: 'Veg Momo',
      photoUrl: './assets/Food1.webp',
      Price: 60,
    },
    {
      name: 'Idli Dosa',
      photoUrl: './assets/Food2.jpg',
      Price: 50,
    },
    {
      name: 'Chicken Momo',
      photoUrl: './assets/Food3.jpg',
      Price: 70,
    },
    {
      name: 'Jalebi',
      photoUrl: './assets/Food4.jpg',
      Price: 120,
    },
    {
      name: 'Pav Bhaji',
      photoUrl: './assets/Food5.jpg',
      Price: 40,
    },
    {
      name: 'Chicken Biriyani',
      photoUrl: './assets/Food6.jpg',
      Price: 120,
    },
    {
      name: 'Mixed Noodles',
      photoUrl: './assets/Food7.jpg',
      Price: 80,
    },
    {
      name: 'Chicken Kathi Roll',
      photoUrl: './assets/Food8.jpg',
      Price: 70,
    },
    {
      name: 'Bengali Thali',
      photoUrl: './assets/Food9.jpg',
      Price: 170,
    },
    {
      name: 'Bengal Style Puri Sabji (4)',
      photoUrl: './assets/Food10.jpg',
      Price: 45,
    },
    {
      name: 'Rohu/Rui  Fish Curry',
      photoUrl: './assets/Food11.jpg',
      Price: 45,
    },
    {
      name: 'Pomfret Fish Curry',
      photoUrl: './assets/Food12.jpg',
      Price: 55,
    },
    {
      name: 'Bengali Light Mutton Curry(4)',
      photoUrl: './assets/Food13.jpg',
      Price: 150,
    },
    {
      name: 'Bengali Special Lunch',
      photoUrl: './assets/Food14.jpg',
      Price: 900,
    },
    {
      name: 'Special Jambo Thali',
      photoUrl: './assets/Food15.jpg',
      Price: 1799,
    },
  ];
}
