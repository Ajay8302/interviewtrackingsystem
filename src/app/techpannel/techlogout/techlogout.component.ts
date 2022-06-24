import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techlogout',
  templateUrl: './techlogout.component.html',
  styleUrls: ['./techlogout.component.css']
})
export class TechlogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

}
