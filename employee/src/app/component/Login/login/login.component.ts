import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  ngOnInit(): void {
  }
  login(){

  }

}
