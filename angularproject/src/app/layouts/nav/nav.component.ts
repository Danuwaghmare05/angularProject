import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  Logout() {
    localStorage.removeItem('username');
  }

  isLogin() {
    if (localStorage.getItem('username') != null) return true;
    return false;
  }
}
