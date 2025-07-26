import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.page.html',
  styleUrls: ['./sign-page.page.scss'],
})
export class SignPagePage implements OnInit
{
  signin_firstname:any;
  signin_lastname:any;
  signin_email:any;
  signin_phone:any;
  signin_password:any;
  signin_confirmpassword:any;

  constructor() { }

  signinForm(e:any)
  {
    console.log("crequested Data: ",e.value);
  }

  ngOnInit() {
  }

}
