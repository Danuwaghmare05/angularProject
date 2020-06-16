import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-parts',
  templateUrl: './mob-parts.component.html',
})
export class MobPartsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
      inStock: 1,
      price: 1200,
      country: 'Australia',
    },
  ];

  totProd() {
    let totalprod = 0;
    for (let mobPart of this.mobParts) {
      totalprod = totalprod + mobPart.inStock;
    }
    return totalprod;
  }
}
