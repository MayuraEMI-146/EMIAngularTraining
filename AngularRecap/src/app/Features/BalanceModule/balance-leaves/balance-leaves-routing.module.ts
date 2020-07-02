import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaidComponent } from "./paid/paid.component";
import { SickComponent } from "./sick/sick.component";

const routes: Routes = [
  { path: "paid", component: PaidComponent },
  {
    path: "",
    redirectTo: "paid",
    pathMatch: "full",
  },
  { path: "sick", component: SickComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceLeavesRoutingModule {}
