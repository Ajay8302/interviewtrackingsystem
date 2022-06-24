import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hrlogin',
  templateUrl: './hrlogin.component.html',
  styleUrls: ['./hrlogin.component.css']
})
export class HrloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  MyLoginfunction(data:any){
   
    var a= (document.getElementById("hrUsername") as HTMLInputElement).value
  
    var b= (document.getElementById("password") as HTMLInputElement).value
  
    if(a=="hr" && b =="india")
    {
      
      sessionStorage.setItem("hrUsername",a)
      window.location.pathname="/showhr"
      alert("login Successful..!")
  
    }
    else
    {
      sessionStorage.setItem("hrUsername", 'anu')
      alert("invalid user")
    }
    }
}