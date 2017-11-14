import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Http } from '@angular/http';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private guard: AppGuard, private http: Http) { }

  ngOnInit() {
    
  }
 
  

}
