import { Component, OnInit } from '@angular/core';
import { techpannel, TechpService } from '../../techp.service';

@Component({
  selector: 'app-t-reschedule',
  templateUrl: './t-reschedule.component.html',
  styleUrls: ['./t-reschedule.component.css']
})
export class TRescheduleComponent implements OnInit {
s:any;
res1:any;
  constructor(public ob1:TechpService) {this.ob1.GettechR().subscribe(r => this.s=r); }
  ngOnInit(): void {
  }
  
  tReshcedule()
  {
    var a=parseInt((document.getElementById("Interview_Id") as HTMLInputElement).value);
    var b =new Date((document.getElementById("techIS") as HTMLInputElement).value);

    var z:techpannel=
    {
      Interview_Id: a,
      techIS: b,
      Candidate_id:0,
      Techrating: 0,
    }  

    this.ob1.tReshcedule(z).subscribe(r=> this.res1=r)
  }
}
