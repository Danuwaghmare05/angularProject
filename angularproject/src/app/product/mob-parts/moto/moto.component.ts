import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
})
export class MotoComponent implements OnInit {
  mobParts: any[];

  constructor(private angularFireDatabase: AngularFireDatabase) {
    angularFireDatabase
      .list('/apiData')
      .valueChanges()
      .subscribe((mobParts) => {
        this.mobParts = mobParts;
        console.log(this.mobParts);
      });
  }

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

  ngOnInit(): void {}
}
