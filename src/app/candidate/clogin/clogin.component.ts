import { Component, OnInit } from '@angular/core';
import { c_add_admin, TechpService } from '../../techp.service';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css'],
})
export class CloginComponent implements OnInit {
  constructor(public ob1: TechpService) {}

  ngOnInit(): void {}
  err: any;
  Clogin(data: any) {
    var a = (document.getElementById('candidateName') as HTMLInputElement).value;
    var i = (document.getElementById('passwordC') as HTMLInputElement).value;

    var m: c_add_admin = {
      Candidate_id: 0,
      candidateName: a,
      pSkills: '',
      sSkills: '',
      experience: 0,
      qualification: '',
      designation: '',
      noticeperiod: '',
      clocation: '',
      passwordC: i,
    };
    this.ob1.Clogin(m).subscribe((c) => {
      if (c > 0) 
      {
        sessionStorage.setItem("candidateName",a)
        sessionStorage.setItem("Candidate_id",data.Candidate_id)
        this.err = 'login sucessfully';
        window.location.pathname = 'showcandidate';
      } 
      else 
      {
        sessionStorage.setItem("candidateName1",'ajay')
        this.err = 'invalid';
      }
    });
  }
}
