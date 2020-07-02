import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { LeavesComponent } from "../../leaves/leaves.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";

const routes: Routes = [
  {
    path: "",
    component: EmployeeDetailsComponent,
    children: [
      {
        path: "add",
        component: AddEmployeeComponent,
      },
      { path: "view", component: ViewEmployeeComponent },
      { path: "edit", component: EditEmployeeComponent },
      {
        path: "leaves",
        component: LeavesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeedetailsRoutingModule {}
