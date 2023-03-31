import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusplanComponent } from './status/statusplan/statusplan.component';
import { AddContactComponent } from './component/add-contact/add-contact/add-contact.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager/contact-manager.component';
import { EditContactComponent } from './component/edit-contact/edit-contact/edit-contact.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound/pagenotfound.component';
import { ViewContactComponent } from './component/view-contact/view-contact/view-contact.component';
import { LoginComponent } from './component/Login/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'add-contact', component:AddContactComponent},
  {path:'view-contact',component:ViewContactComponent},
  {path:'edit-contact',component:EditContactComponent},
  {path:'contact-manager',component:ContactManagerComponent},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
