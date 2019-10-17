import { NgForm } from '@angular/forms'; // use to compaire user details with database details
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  model = {
    email : '',
    password : ''
  };
  emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.userService.login(form.value)
  }

}
