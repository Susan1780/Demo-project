import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeCardComponent } from './component/time-card/time-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { StatusplanComponent } from './status/statusplan/statusplan.component';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AddContactComponent } from './component/add-contact/add-contact/add-contact.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager/contact-manager.component';
import { EditContactComponent } from './component/edit-contact/edit-contact/edit-contact.component';
import { SpinnerComponent } from './component/spinner/spinner/spinner.component';
import { ViewContactComponent } from './component/view-contact/view-contact/view-contact.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound/pagenotfound.component';
import { LoginComponent } from './component/Login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeCardComponent,
    EmployeeDetailsComponent,
    NavbarComponent,
    StatusplanComponent,
    AddContactComponent,
    ContactManagerComponent,
    EditContactComponent,
    SpinnerComponent,
    ViewContactComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
