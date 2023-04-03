import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators  } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  regform = new FormGroup({

  })


  ngOnInit(): void {
  }
  Register(){

  }

}
