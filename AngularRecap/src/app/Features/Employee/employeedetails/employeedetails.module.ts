import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployeedetailsRoutingModule } from "./employeedetails-routing.module";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [CommonModule, EmployeedetailsRoutingModule],
})
export class EmployeedetailsModule {
  constructor() {
    console.log("Employee Module Loaded!!");
  }
}
