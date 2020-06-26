import { CommonService } from './../../service/common.service';
import { Component, OnInit } from '@angular/core';

import { MobParts } from 'src/app/models/mob-parts';
//import { MOBPARTS } from './mock-data';

@Component({
  selector: 'app-mob-parts',
  templateUrl: './mob-parts.component.html',
})
export class MobPartsComponent implements OnInit {
  name: string = 'Alex';

  constructor(private commonService: CommonService) {
    console.log('2 Constructor Block...!');
  } // class: DI -> obj init

  ngOnInit(): void {
    // component

    console.log('1 ngOnInit Block...!');
    //1. Data from mock.ts
    //this.mobParts = MOBPARTS;

    //2. Data from DB
    //let commonService = new CommonService();
    //this.mobParts = commonService.getMobParts();

    // 3. Data from Provider using D.I.
    //this.mobParts = this.commonService.getMobParts();

    //4. Data from API
    this.commonService.getMobParts().subscribe((res) => (this.mobParts = res));
  }

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
    if (Array.isArray(this.mobParts)) {
      for (let mobPart of this.mobParts) {
        totalprod = totalprod + mobPart.inStock;
      }
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
