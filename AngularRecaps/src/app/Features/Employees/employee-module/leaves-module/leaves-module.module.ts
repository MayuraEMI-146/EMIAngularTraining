import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LeavesModuleRoutingModule } from "./leaves-module-routing.module";
import { LeavesComponent } from "./leaves/leaves.component";

@NgModule({
  declarations: [LeavesComponent],
  imports: [CommonModule, LeavesModuleRoutingModule],
})
export class LeavesModuleModule {
  constructor() {
    console.log("Leaves Module Loaded!!");
  }
}
