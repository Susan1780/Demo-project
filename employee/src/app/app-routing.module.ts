import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusplanComponent } from './status/statusplan/statusplan.component';
import { LoginComponent } from './component/Login/login/login.component';
import { NavComponent } from './header/nav/nav.component';
import { TimeCardComponent } from './component/time-card/time-card.component';



const routes: Routes = [
  {path:'',redirectTo:'nav',pathMatch:'full'},
  {path:'nav', component:NavComponent},
  {path:'statusplan', component:StatusplanComponent},
  {path:'time-card',component:TimeCardComponent},
  {path:'login',component:LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
