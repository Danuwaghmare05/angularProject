import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent implements OnInit {
  title = 'Hello Angular';

  cityArr = ['Pune', 'Mumbai', 'Hydrabad'];
  //console.log(cityArr);

  mobParts = [
    {
      id: 1001,
      name: 'Screen 5.5',
      description: '5.5 Screen for Moto g',
      inStock: 5,
      price: 1200,
      country: 'Germany',
    },
    {
      id: 1002,
      name: 'Screen 5',
      description: '5 Screen for Samsung',
      inStock: 8,
      price: 1200,
      country: 'India',
    },
    {
      id: 1003,
      name: 'key panel',
      description: 'Key panel for Nokia',
      inStock: 0,
      price: 1200,
      country: 'Australia',
    },
  ];
}
