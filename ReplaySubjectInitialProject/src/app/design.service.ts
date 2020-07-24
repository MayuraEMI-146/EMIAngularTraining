import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  videoEmit = new ReplaySubject<string>(4);
  constructor() { }
}
