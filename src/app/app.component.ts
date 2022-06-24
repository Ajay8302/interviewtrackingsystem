import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'interviewtracking';
 name:any;
 b:boolean=true
 c:boolean=true
 d:boolean=true
 e:boolean=true
 constructor(public ob:Router) { }
ngOnInit():void
{
  this.name= sessionStorage.getItem("candidateName");
    if(this.name==null)
    {
      this.b=true
    }
    else
    {
      this.b=false
    }
    this.name= sessionStorage.getItem("Username");
    if(this.name==null)
    {
      this.c=true
    }
    else
    {
      this.c=false
    }
    this.name= sessionStorage.getItem("techUsername");
    if(this.name==null)
    {
      this.d=true
    }
    else
    {
      this.d=false
    }
    this.name = sessionStorage.getItem("hrUsername");
    if(this.name==null)
    {
      this.e=true
    }
    else
    {
      this.e=false
    }
  }
}
