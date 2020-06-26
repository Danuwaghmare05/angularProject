//import { DBMOBPARTS } from './../database/db';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: Http) {}

  getMobParts() {
    //return DBMOBPARTS;
    return this.http
      .get('../../assets/API/mob-parts.json')
      .pipe(map((res) => res.json().apiData));
  }
}
