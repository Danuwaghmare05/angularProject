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

  //Create logic and check MRP admin Username and password
  checkAdminNamePassword(adminName: string, adminPassword: string) {
    if (adminName == 'payment' && adminPassword == 'payment') {
      //localstorage save adminName tempMemory
      localStorage.setItem('adminName', 'payment');
      return true;
    } else {
      return false;
    }
  }
}
