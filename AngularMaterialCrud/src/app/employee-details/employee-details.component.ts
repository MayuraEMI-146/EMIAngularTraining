import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  emp: Employee = { id: 0, name: '', department: '', Gender: '', designation: '' };
  isDataLoading = true;
  constructor(private empService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEmployeeID(this.route.snapshot.params.id);
  }

  getEmployeeID(id) {
    this.empService.getEmployeeById(id).subscribe(data => {
      this.isDataLoading = false;
      this.emp = data;
      console.log(this.emp);

    });
  }

  
}
