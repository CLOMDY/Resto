import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit
{
  login_email:any;
  login_password:any;
  constructor() { }

  loginForm(e:any)
  {
    console.log("crequested Data: ",e.value);
  }

  ngOnInit() {
  }

}
