import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Features/home/home.component";
import { AboutUsComponent } from "./Features/about-us/about-us.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aboutus", component: AboutUsComponent },
  {
    path: "employee",
    loadChildren: () =>
      import(
        "./Features/Employees/employee-module/employee-module.module"
      ).then((e) => e.EmployeeModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
