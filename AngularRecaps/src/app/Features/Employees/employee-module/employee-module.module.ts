import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeModuleRoutingModule } from './employee-module-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';


@NgModule({
  declarations: [AddEmployeeComponent, EditEmployeeComponent, ViewEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeModuleRoutingModule
  ]
})
export class EmployeeModuleModule { }
