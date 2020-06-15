import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class DemoChildComponent implements OnInit {
counter = 45;
message: string;

  constructor() {
    console.log('child constructor!!');
  }

  increasecounterByOne() {
  this.counter++;
  this.message = `Counter value is ${this.counter}`;
  }
  decreasecounterbyOne() {
    this.counter--;
    this.message = `Counter value is ${this.counter}`;
    }
  ngOnInit() {
  }

}
