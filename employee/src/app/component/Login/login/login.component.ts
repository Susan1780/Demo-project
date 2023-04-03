import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private route:Router){}
  loginform = new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  ngOnInit(): void {
  }
  login(){
    this.route.navigate(['nav'])

  }
  Register(){
    this.route.navigate(['register'])
  }



}
