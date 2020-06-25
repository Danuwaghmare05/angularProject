import { DBMOBPARTS } from './../database/db';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getMobParts() {
    return DBMOBPARTS;
  }
}
