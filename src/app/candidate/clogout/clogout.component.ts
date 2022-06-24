import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clogout',
  templateUrl: './clogout.component.html',
  styleUrls: ['./clogout.component.css']
})
export class ClogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

}
