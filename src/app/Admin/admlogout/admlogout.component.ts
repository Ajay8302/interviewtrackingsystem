import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admlogout',
  templateUrl: './admlogout.component.html',
  styleUrls: ['./admlogout.component.css']
})
export class AdmlogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

}
