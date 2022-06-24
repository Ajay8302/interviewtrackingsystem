import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  MyLoginfunction(data:any){
   
  var a= (document.getElementById("Username") as HTMLInputElement).value

  var b= (document.getElementById("password") as HTMLInputElement).value

  if(a=="ajay" && b =="india")
  {   
    sessionStorage.setItem("Username",a)
    window.location.pathname="/showadmin"
    alert("login Successful..!")
  }
  else
  {
    sessionStorage.setItem("Username", 'ajay')
    alert("invalid user")
  }
  }

}