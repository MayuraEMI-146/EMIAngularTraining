import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApplyComponent } from "../apply/apply.component";
import { LeavesComponent } from "../leaves.component";
import { BalanceComponent } from "../balance/balance.component";

const routes: Routes = [
  {
    path: "",
    component: LeavesComponent,
    children: [
      {
        path: "balance",
        component: BalanceComponent,
      },
      { path: "apply", component: ApplyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeavemoduleRoutingModule {}
