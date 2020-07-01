import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-mrp',
  templateUrl: './login-mrp.component.html',
})
export class LoginMrpComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  msg;
  ngOnInit(): void {}

  check(adminName: string, adminPassword: string) {
    var output = this.authService.checkAdminNamePassword(
      adminName,
      adminPassword
    );
    if (output) {
      this.router.navigate(['/dashboard/setMRP']);
    } else {
      this.msg = 'Invalid username or password';
    }
  }
}
