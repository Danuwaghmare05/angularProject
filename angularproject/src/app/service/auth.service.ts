import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  //Create logic and check Username and password
  checkUserNameAndPassword(username: string, password: string) {
    if (username == 'admin' && password == 'admin') {
      //localstorage save username tempMemory
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }
}
