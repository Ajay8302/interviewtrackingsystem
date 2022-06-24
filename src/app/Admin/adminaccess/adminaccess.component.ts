import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {c_add_admin, TechpService } from '../../techp.service';

@Component({
  selector: 'app-adminaccess',
  templateUrl: './adminaccess.component.html',
  styleUrls: ['./adminaccess.component.css']
})
export class AdminaccessComponent implements OnInit {
  m:any;
  id:any;
  res:any;
  res1:any
  i:any;
  v:any;
  // a:any;
  
  constructor(public ob1:TechpService) {
    this.ob1.CrudCandidates().subscribe(t => this.v=t );
   }
   
  //  Deletec(i:any)
  //  {
  //    console.log(i)
  //  }
  k:any;

  updateC()
  {
    var a =parseInt((document.getElementById("Candidate_id") as HTMLInputElement).value);
    var b = (document.getElementById("candidateName") as HTMLInputElement).value;   
    var c = (document.getElementById("pSkills") as HTMLInputElement).value; 
    var d = (document.getElementById("sSkills") as HTMLInputElement).value;    
    var e = parseInt((document.getElementById("experience") as HTMLInputElement).value); 
    var f = (document.getElementById("qualification") as HTMLInputElement).value;    
    var h = (document.getElementById("designation") as HTMLInputElement).value;    
    var i = (document.getElementById("noticeperiod") as HTMLInputElement).value;
    var j = (document.getElementById("clocation") as HTMLInputElement).value; 


    var z:c_add_admin=
    {
      Candidate_id: a,
      candidateName: b,
      pSkills: c,
      sSkills: d,
      experience: e,
      qualification: f,
      designation: h,
      noticeperiod: i,
      clocation: j,
      passwordC: ''
    }  

    this.ob1.updateC(z).subscribe(r=> this.res1=r)
  }


  
  Deletec(i:any)
  {
    this.ob1.Deletec(i).subscribe(r=> this.res=r)
    
  }




  err:any;
  res2:any;
  res3:any;

  admAddC(data:any){ 
    var a =parseInt((document.getElementById("Candidate_id") as HTMLInputElement).value);
    var b = (document.getElementById("candidateName") as HTMLInputElement).value;   
    var c = (document.getElementById("pSkills") as HTMLInputElement).value; 
    var d = (document.getElementById("sSkills") as HTMLInputElement).value;    
    var e = parseInt((document.getElementById("experience") as HTMLInputElement).value); 
    var f = (document.getElementById("qualification") as HTMLInputElement).value;    
    var h = (document.getElementById("designation") as HTMLInputElement).value;    
    var i = (document.getElementById("noticeperiod") as HTMLInputElement).value;
    var j = (document.getElementById("clocation") as HTMLInputElement).value; 


    var p:c_add_admin=
    {
      Candidate_id: a,
      candidateName: b,
      pSkills: c,
      sSkills: d,
      experience: e,
      qualification: f,
      designation: h,
      noticeperiod: i,
      clocation: j,
      passwordC: ''
    }  
    this.ob1.admAddC(p).subscribe(c=> this.res3=c)
  }
  ngOnInit(): void {
  }

}
