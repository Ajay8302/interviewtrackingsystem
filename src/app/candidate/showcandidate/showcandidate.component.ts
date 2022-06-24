import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcandidate',
  templateUrl: './showcandidate.component.html',
  styleUrls: ['./showcandidate.component.css']
})
export class ShowcandidateComponent implements OnInit {
 log:any;
  constructor() {
    this.log=sessionStorage.getItem("candidateName")
   }

  ngOnInit(): void {
    
  }
  

}
