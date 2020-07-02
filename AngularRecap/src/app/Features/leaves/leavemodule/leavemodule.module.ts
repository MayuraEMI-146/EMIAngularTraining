import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LeavemoduleRoutingModule } from "./leavemodule-routing.module";
import { LeavesComponent } from "../leaves.component";
import { BalanceComponent } from "../balance/balance.component";
import { ApplyComponent } from "../apply/apply.component";

@NgModule({
  declarations: [LeavesComponent, BalanceComponent, ApplyComponent],
  imports: [CommonModule, LeavemoduleRoutingModule],
})
export class LeavemoduleModule {}
