import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { schedule1, TechpService } from '../../techp.service';

@Component({
  selector: 'app-hraccess',
  templateUrl: './hraccess.component.html',
  styleUrls: ['./hraccess.component.css']
})
export class HraccessComponent implements OnInit {
  Interview_Id :any;
  Candidate_id :any;
  Techrating : any;
  techIS : any;
  res:any
  b: any;
  data:any
  constructor(public ob1:TechpService,public ob2:ActivatedRoute) { }

  ngOnInit(): void {
    this.ob2.queryParams.subscribe((d: { [x: string]: any; })=>{this.Candidate_id=d['a'],this.Interview_Id=d['b'],this.techIS=d['c'], this.Techrating=d['d']})
    this.ob1.Gettech1().subscribe((r: any) =>this.b=r);
  }
  hrdata()
  {
    var a =parseInt((document.getElementById("HRrating") as HTMLInputElement).value);
    var b = new Date((document.getElementById("hrIS") as HTMLInputElement).value);
    var c=(document.getElementById("FinalStatus") as HTMLInputElement).value;

    var p:schedule1=
    {
      HRrating: a,
      hrIS: b,
      FinalStatus: c,
      Schedule_id: 0,
      Interview_Id:this.Interview_Id,
      Candidate_id: this.Candidate_id,
    }

    this.ob1.hrdata(p).subscribe(p => this.res=p)
  }

}