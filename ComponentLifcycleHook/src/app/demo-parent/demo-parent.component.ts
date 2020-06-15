import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DemoChildComponent } from '../demo-child/demo-child.component';
import { ChangeColorDirective } from '../change-color.directive';

@Component({
  selector: 'app-demo-parent',
  templateUrl: './demo-parent.component.html',
  styleUrls: ['./demo-parent.component.css']
})
export class DemoParentComponent {
@ViewChild(DemoChildComponent, {static: true}) child: DemoChildComponent;
@ViewChild(ChangeColorDirective, {static: false}) colordirective: ChangeColorDirective;
  constructor() {
    console.log('Parent Consrtuctor!!');
  }

  increment() {
    this.child.increasecounterByOne();

  }

  decrement() {
    this.child.decreasecounterbyOne();

  }

  ngOnInit() {
    console.log(this.child.counter);
  }

  Changecolor(color:string)
  {
  this.colordirective.changeBackGroundColor(color);

  }
}
