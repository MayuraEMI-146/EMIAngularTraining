import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeModuleRoutingModule } from './employee-module-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


@NgModule({
  declarations: [AddEmployeeComponent, EditEmployeeComponent, ViewEmployeeComponent, EmployeeDetailsComponent],
  imports: [
    CommonModule,
    EmployeeModuleRoutingModule
  ]
})
export class EmployeeModuleModule { }
