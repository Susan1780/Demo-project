import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(){
  }
  click(){
    this.route.navigate(['/add-contact'])
  }

}
