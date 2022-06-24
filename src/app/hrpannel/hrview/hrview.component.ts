import { Component, OnInit } from '@angular/core';
import { TechpService } from '../../techp.service';

@Component({
  selector: 'app-hrview',
  templateUrl: './hrview.component.html',
  styleUrls: ['./hrview.component.css']
})
export class HrviewComponent implements OnInit {
res1:any;
  constructor(public ob1:TechpService) { this.ob1.Gettech1().subscribe(r => this.m=r );}
  m:any;
  ngOnInit(): void {
  }

  Deletehr(i:any)
  {
    this.ob1.Deletetech(i).subscribe((r: any)=> this.res1=r)
  // console.log('It will show up an error') 
  }
}