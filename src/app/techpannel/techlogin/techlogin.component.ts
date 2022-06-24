import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techlogin',
  templateUrl: './techlogin.component.html',
  styleUrls: ['./techlogin.component.css']
})
export class TechloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  MyLoginfunction(data:any){
   
    var a= (document.getElementById("techUsername") as HTMLInputElement).value
  
    var b= (document.getElementById("password") as HTMLInputElement).value
  
    if(a=="ajay" && b =="india")
    {
      
      sessionStorage.setItem("techUsername",a)
      window.location.pathname="/showtech"
  alert("login Successful..!")
  
    }
    else
    {
      sessionStorage.setItem("techUsername", 'darshana')
      alert("invalid user")
    }
    }
}