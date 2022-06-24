import { Component, OnInit } from '@angular/core';
import {schedule1, TechpService } from '../../techp.service';
 //import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adm-cview-status',
  templateUrl: './adm-cview-status.component.html',
  styleUrls: ['./adm-cview-status.component.css']
})
export class AdmCviewStatusComponent implements OnInit {
p:any
  constructor(public ob1:TechpService) {
    this.ob1.Getfinal().subscribe(r => this.p=r );
   }

   

  ngOnInit(): void {
  }

}
