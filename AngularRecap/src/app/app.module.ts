import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutUsComponent } from "./Features/about-us/about-us.component";
// import { EmployeeDetailsComponent } from "./Features/employee-details/employee-details.component";
// import { AddEmployeeComponent } from "./Features/add-employee/add-employee.component";
// import { EditEmployeeComponent } from "./Features/edit-employee/edit-employee.component";
// import { ViewEmployeeComponent } from "./Features/view-employee/view-employee.component";
// import { LeavesComponent } from "./Features/leaves/leaves.component";
// import { BalanceComponent } from "./Features/balance/balance.component";
// import { ApplyComponent } from "./Features/apply/apply.component";
// import { PaidComponent } from "./Features/paid/paid.component";
// import { SickComponent } from "./Features/sick/sick.component";
import { WFHComponent } from "./Features/wfh/wfh.component";
import { DoctorsAppointmentComponent } from "./Features/doctors-appointment/doctors-appointment.component";
import { MenuComponent } from "./Features/menu/menu.component";
import { HomeComponent } from "./Features/home/home.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,

    WFHComponent,
    DoctorsAppointmentComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
