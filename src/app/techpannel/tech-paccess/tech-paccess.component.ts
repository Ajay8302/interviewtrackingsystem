import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { techpannel, TechpService } from '../../techp.service';

@Component({
  selector: 'app-tech-paccess',
  templateUrl: './tech-paccess.component.html',
  styleUrls: ['./tech-paccess.component.css'],
  providers: [TechpService],
})
export class TechPaccessComponent implements OnInit {
  s:any;
   res:any;
   Candidate_id:any;
   candidateName:any;
   pSkills:any;
   sSkills:any;
   experience:any;
   qualification:any;
   designation:any;
   noticeperiod:any;
   clocation:any;
   b: any;
   
 
 
 
   constructor(public ob1:TechpService ,public ob2:ActivatedRoute) { }
 
   ngOnInit(): void {
     this.ob2.queryParams.subscribe((d: { [x: string]: any; })=>{this.Candidate_id=d['a'],this.candidateName=d['b'],this.pSkills=d['c'], this. sSkills=d['d'],this.experience=d['e'],this.qualification=d['f'],this. designation=d['g'],this.noticeperiod=d['h'],this.clocation=d['i']})
     this.ob1.ShowCandidates().subscribe((r: any) =>this.b=r);
   }
   
   techpdata(data:any)
   {
     var a =new Date((document.getElementById("techIS") as HTMLInputElement).value);
     var b = parseInt((document.getElementById("Techrating") as HTMLInputElement).value);
     var c=parseInt((document.getElementById("Interview_Id") as HTMLInputElement).value);
     var r:techpannel=
     {
       Candidate_id: this.Candidate_id,
       Interview_Id:c,
       Techrating:b,
       techIS: a,
     }
   
 
 
     this.ob1.techpdata(r).subscribe(r => 
     {
       
       if(r != null)
       {
         // SeeStorage.setItem('username',JSON.stringify(data)) 
         this.res = "Data Save for Future Use..!"
       }
       else
       {
         this.res = "Oop's Some Error...!Data is Not Saved."
       }
   });
   }
 
 }
