import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Features/home/home.component';
import { AboutUsComponent } from './Features/about-us/about-us.component';
import { MenuComponent } from './Features/menu/menu.component';
import { AddEmployeeComponent } from './Features/Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Features/Employees/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './Features/Employees/view-employee/view-employee.component';
import { EditEmployeesComponent } from './Features/Employees/EmployeeModule/edit-employees/edit-employees.component';
import { LeavesComponent } from './Features/Employees/leaves/leaves.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    EditEmployeesComponent,
    LeavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
