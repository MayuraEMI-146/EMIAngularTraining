import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
@Input() employee=[];
  constructor() { }

  ngOnInit() {
  }

}
