import { Component, OnInit } from '@angular/core';

import { MobParts } from 'src/app/models/mob-parts';
import { MOBPARTS } from './mock-data';

@Component({
  selector: 'app-mob-parts',
  templateUrl: './mob-parts.component.html',
})
export class MobPartsComponent implements OnInit {
  name: string = 'Alex';

  ngOnInit(): void {
    // component
    this.mobParts = MOBPARTS;
    console.log('1 ngOnInit Block...!');
  }

  constructor() {
    console.log('2 Constructor Block...!');
  } // class: DI -> obj init

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mobParts = [];
    console.log('3 ngOnDestroy Block...!');
  }

  ngAfterViewInit() {
    console.log('4 ngAfterViewInit Block...!');
  }

  ngAfterContentInit() {
    console.log('5 ngAfterContentInit Block...!');
  }

  mobParts: MobParts[]; // 10MB

  totProd() {
    let totalprod = 0;
    for (let mobPart of this.mobParts) {
      totalprod = totalprod + mobPart.inStock;
    }
    return totalprod;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }

  upQuantity(mobPart) {
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }

  catchVal(event) {
    console.log('We are in catchval', event);
  }
}
