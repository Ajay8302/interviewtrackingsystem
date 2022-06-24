import { Component, OnInit } from '@angular/core';
import { TechpService } from '../../techp.service';


@Component({
  selector: 'app-tviewmems',
  templateUrl: './tviewmems.component.html',
  styleUrls: ['./tviewmems.component.css']
})
export class TviewmemsComponent implements OnInit {

  constructor(public ob1:TechpService) {
    this.ob1.ShowCandidates().subscribe(r => this.m=r );
   }
   m:any;

  ngOnInit(): void {
  }

  res:any
res1:any
res3:any
  
  Deletetech(i:any)
  {
    this.ob1.Deletetech(i).subscribe((r: any)=> this.res1=r)
  // console.log('It will show up an error') 
  }

}
