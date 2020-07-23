import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  constructor(private design: DesignService) {
    
   }

  ngOnInit() {
    this.design.exclusive.next(true);
  }
  ngOnDestroy() {
   this.design.exclusive.next(false);
  }
}
