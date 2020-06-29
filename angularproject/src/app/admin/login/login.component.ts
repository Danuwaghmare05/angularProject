import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  msg;
  ngOnInit(): void {}

  check(username: string, password: string) {
    var output = this.authService.checkUserNameAndPassword(username, password);
    if (output == true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.msg = 'Invalid username or password';
    }
  }
}
