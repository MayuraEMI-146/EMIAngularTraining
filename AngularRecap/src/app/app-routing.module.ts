import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Features/home/home.component";
import { AboutUsComponent } from "./Features/about-us/about-us.component";
import { EmployeeDetailsComponent } from "./Features/employee-details/employee-details.component";
import { AddEmployeeComponent } from "./Features/add-employee/add-employee.component";
import { ViewEmployeeComponent } from "./Features/view-employee/view-employee.component";
import { EditEmployeeComponent } from "./Features/edit-employee/edit-employee.component";
import { LeavesComponent } from "./Features/leaves/leaves.component";
import { BalanceComponent } from "./Features/balance/balance.component";
import { ApplyComponent } from "./Features/apply/apply.component";
import { PaidComponent } from "./Features/paid/paid.component";
import { SickComponent } from "./Features/sick/sick.component";
import { WFHComponent } from "./Features/wfh/wfh.component";

import { DoctorsAppointmentComponent } from "./Features/doctors-appointment/doctors-appointment.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  { path: "aboutus", component: AboutUsComponent },
  {
    path: "details",
    loadChildren: () =>
      import("./Features/Employee/employeedetails/employeedetails.module").then(
        (e) => e.EmployeedetailsModule
      ),
  },
  // {
  //   path: "details",
  //   component: EmployeeDetailsComponent,
  //   children: [
  //     {
  //       path: "add",
  //       component: AddEmployeeComponent,
  //     },
  //     { path: "view", component: ViewEmployeeComponent },
  //     { path: "edit", component: EditEmployeeComponent },
  //     {
  //       path: "leaves",
  //       component: LeavesComponent,
  //       children: [
  //         {
  //           path: "balance",
  //           component: BalanceComponent,
  //           children: [
  //             { path: "paid", component: PaidComponent },
  //             { path: "sick", component: SickComponent },
  //           ],
  //         },
  //         {
  //           path: "apply",
  //           component: ApplyComponent,
  //           children: [
  //             { path: "wfh", component: WFHComponent },
  //             { path: "doctor", component: DoctorsAppointmentComponent },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
