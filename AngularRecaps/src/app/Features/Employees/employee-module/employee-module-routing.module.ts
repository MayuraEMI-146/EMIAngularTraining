import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";

const routes: Routes = [
  {
    path: "",
    component: EmployeeDetailsComponent,
    children: [
      { path: "add", component: AddEmployeeComponent },
      { path: "view", component: ViewEmployeeComponent },
      { path: "edit", component: EditEmployeeComponent },
      {
        path: "leave",
        loadChildren: () =>
          import("./leaves-module/leaves-module.module").then(
            (l) => l.LeavesModuleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeModuleRoutingModule {}
