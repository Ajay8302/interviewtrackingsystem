import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hrlogout',
  templateUrl: './hrlogout.component.html',
  styleUrls: ['./hrlogout.component.css']
})
export class HrlogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  sessionStorage.clear();
  }

}
