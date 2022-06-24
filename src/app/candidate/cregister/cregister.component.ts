import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TechpService } from '../../techp.service';

@Component({
  selector: 'app-cregister',
  templateUrl: './cregister.component.html',
  styleUrls: ['./cregister.component.css']
})
export class CregisterComponent implements OnInit {

  constructor(public ob1:TechpService) { }

  ngOnInit(): void {
  }
  err:any;
  res:any;

  register(data:any){
   
    this.ob1.Cregister(data).subscribe(c=>{
      if(c != null)
    {
     
      this.res = "Registration Successful..!";
      window.location.pathname="clogin"
    }
    else if(c==5)
    {
      this.res = "Oop's some error we have" 
    }
    else
    {
      this.res = "U can't Register."
    }});
  

  }

}