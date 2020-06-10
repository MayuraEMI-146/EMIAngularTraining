import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stored-records',
  templateUrl: './stored-records.component.html',
  styleUrls: ['./stored-records.component.css']
})
export class StoredRecordsComponent implements OnInit {
EmployeeRecords=[];
  constructor() { }

  StoredRecord(event)
  {
    this.EmployeeRecords.push(event);
  }
  ngOnInit() {
  }

}
