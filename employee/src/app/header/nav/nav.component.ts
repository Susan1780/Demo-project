import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {
title="my-app";
selectedMenu:any='HOME';

goTo(paramText:string){
  this.selectedMenu=paramText
}
}
