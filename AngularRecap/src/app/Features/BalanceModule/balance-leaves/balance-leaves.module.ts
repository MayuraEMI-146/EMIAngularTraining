import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BalanceLeavesRoutingModule } from "./balance-leaves-routing.module";
import { SickComponent } from "./sick/sick.component";
import { PaidComponent } from "./paid/paid.component";

@NgModule({
  declarations: [PaidComponent, SickComponent],
  imports: [CommonModule, BalanceLeavesRoutingModule],
})
export class BalanceLeavesModule {}
