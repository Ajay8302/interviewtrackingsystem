import { Component, OnInit } from '@angular/core';
import { TechpService } from '../../techp.service';

@Component({
  selector: 'app-cview-status',
  templateUrl: './cview-status.component.html',
  styleUrls: ['./cview-status.component.css']
})
export class CviewStatusComponent implements OnInit {
  m:any

  constructor(public ob1:TechpService ) { this.ob1.cViewstatus().subscribe(r => this.m=r );}

  ngOnInit(): void {
  }

}
