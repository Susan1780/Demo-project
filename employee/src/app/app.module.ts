import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

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
// import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './header/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
   
    TimeCardComponent,
    EmployeeDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
