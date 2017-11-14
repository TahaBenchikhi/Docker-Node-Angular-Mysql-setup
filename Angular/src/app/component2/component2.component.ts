import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Http } from '@angular/http';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private guard: AppGuard, private http: Http) { }

  ngOnInit() {
    
  }
 
  

}
