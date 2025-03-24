import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { User } from '../Modal/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  authService : AuthService = inject(AuthService);
  router : Router = inject(Router);
  activatedRoute : ActivatedRoute = inject(ActivatedRoute);

  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  onLogin() {

    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if(user === undefined) {
      alert('The username and password is not correct !');
    } else {
      this.router.navigate(['\dashboard']);
      alert('Hi '+username+'. Welcome to SYN Portal.');
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean( queries.get('logout') );

      if(logout) {
        this.authService.logout();
        alert('You are logged out. IsLogged = '+this.authService.isLogged);
      }

    })
  }
}
