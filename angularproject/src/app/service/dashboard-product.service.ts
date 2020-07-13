import { DBMOBPARTS } from './../database/db';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardProductService {
  constructor() {}

  getMobParts() {
    return DBMOBPARTS;
  }

  //Create logic and check Username and password
  checkProductName(prdName: string) {
    console.log('ooooooo');
  }
}
