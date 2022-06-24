import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class TechpService {

  constructor(private ob1: HttpClient) { 
    
  }

  Cregister(c:c_add_admin):Observable<number>
  {
    return this.ob1.post<number>("https://localhost:44391/api/techpannel/Cregister",c)
  }  

  Clogin(c:c_add_admin):Observable<number>
  {
    return this.ob1.post<number>("https://localhost:44391/api/techpannel/Clogin",c)
  }

  
  ShowCandidates():Observable<c_add_admin[]>
 {
    return this.ob1.get<c_add_admin[]>("https://localhost:44391/api/techpannel/Getmemsdata");
 }

  techpdata(m: techpannel): Observable<number> 
  {
    return this.ob1.post<number>('https://localhost:44391/api/techpannel/tecpdata', m);
  }

  Gettech1():Observable<techpannel[]>
  {
     return this.ob1.get<techpannel[]>("https://localhost:44391/api/techpannel/Gettech");
  }


  
  CrudCandidates(): Observable<c_add_admin[]>
  {
    return this.ob1.get<c_add_admin[]>("https://localhost:44391/api/techpannel/Getcrud");
  }

  Deletec(a:number):Observable<string>
  {
    return this.ob1.delete<string>("https://localhost:44391/api/techpannel/deleterec?i="+a);
  }
 
  updateC(n:c_add_admin):Observable<string>
  {
    return this.ob1.put<string>("https://localhost:44391/api/techpannel/editC?id=",n);
  }

  admAddC(s: c_add_admin):Observable<string> 
  {
    return this.ob1.post<string>('https://localhost:44391/api/techpannel/admAddC', s);
  }

  Getfinal():Observable<schedule1[]>
  {
    return this.ob1.get<schedule1[]>("https://localhost:44391/api/techpannel/Getfinal");
  }



  hrdata(m:schedule1): Observable<string> 
  {
    return this.ob1.post<string>("https://localhost:44391/api/hraccess/data", m);
  }



  //for Reschedule by Tech Pannel
  
  GettechR():Observable<techpannel[]>
  {
    return this.ob1.get<techpannel[]>("https://localhost:44391/api/techpannel/GettechR");
  }

  tReshcedule(m:techpannel): Observable<number> 
  {
    return this.ob1.put<number>("https://localhost:44391/api/techpannel/tReshcedule?id=",m);
  }

  

  //for Reschedule by HR Pannel
  Gethr():Observable<schedule1[]>
  {
    return this.ob1.get<schedule1[]>("https://localhost:44391/api/techpannel/GethR");
  }
  hReshcedule(m:schedule1):Observable<string>
  {
    return this.ob1.put<string>("https://localhost:44391/api/techpannel/hReshcedule?id=",m)
  }



  Deletetech(a:number):Observable<string>
  {
    return this.ob1.delete<string>("https://localhost:44391/api/techpannel/deletetech?i="+a);
  }


  Deletehr(a:number):Observable<string>
  {
    return this.ob1.delete<string>("https://localhost:44391/api/techpannel/deletetech?i="+a);
  }


  
  //for Reschedule by Candidate Only
  cViewstatus():Observable<schedule1[]>
  {
    return this.ob1.get<schedule1[]>("https://localhost:44391/api/techpannel/GethC");
  }


}


export class techpannel {
  Interview_Id : Number = 0;
  Candidate_id : Number = 0;
  Techrating : Number = 0;
  techIS :Date=new Date;
  // InterviewScheduleDate : date = 0;
}


export class c_add_admin{
  Candidate_id	: Number = 0;	
  candidateName	:String = " ";
  pSkills	:String = " ";
  sSkills	:String = " ";
  experience	:Number = 0;
  qualification		:String = " ";
  designation		:String = " ";
  noticeperiod		:String = " ";
  clocation		:String = " ";
  passwordC:string=" ";
  // passwordC : string = " ";
}


export class schedule1 {
   
  Schedule_id:number=0;
  Candidate_id :number=0;
  Interview_Id:number=0
  HRrating: Number = 0;
  hrIS:Date=new Date;
  FinalStatus: string ="" ;
  }
