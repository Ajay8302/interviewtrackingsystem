import { Component, OnInit } from '@angular/core';
import { schedule1, TechpService } from '../../techp.service';

@Component({
  selector: 'app-hreschedule',
  templateUrl: './hreschedule.component.html',
  styleUrls: ['./hreschedule.component.css']
})
export class HrescheduleComponent implements OnInit {

  constructor(public ob1:TechpService ) {this.ob1.Gethr().subscribe(r => this.t=r); }

  ngOnInit(): void {
  }
  res1:any
  t:any
  s:any
  hReshcedule()
  {
    var a=parseInt((document.getElementById("Interview_Id") as HTMLInputElement).value);
    var b =new Date((document.getElementById("hrIS") as HTMLInputElement).value);

    var z:schedule1=
    {
      Interview_Id: a,
      Schedule_id: 0,
      Candidate_id: 0,
      HRrating: 0,
      hrIS: b,
      FinalStatus: ''
    }  

    this.ob1.hReshcedule(z).subscribe(r=> this.res1=r)
  }

}
