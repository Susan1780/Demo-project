import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusplanComponent } from './status/statusplan/statusplan.component';

const routes: Routes = [
  {path:"",component:StatusplanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
