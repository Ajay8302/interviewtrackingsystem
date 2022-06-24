import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component'
import { TechloginComponent } from './techpannel/techlogin/techlogin.component';
import { HrloginComponent } from './hrpannel/hrlogin/hrlogin.component';
import { TechPaccessComponent } from './techpannel/tech-paccess/tech-paccess.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TviewmemsComponent } from './techpannel/tviewmems/tviewmems.component';
import { TechsharedComponent } from './techpannel/techshared/techshared.component';
import { ShowtechComponent } from './techpannel/showtech/showtech.component';
import { ShowadminComponent } from './Admin/showadmin/showadmin.component';
import { ShowhrComponent } from './hrpannel/showhr/showhr.component';
import { AdminaccessComponent } from './Admin/adminaccess/adminaccess.component';
import { AdmlogoutComponent } from './Admin/admlogout/admlogout.component';
import { TechlogoutComponent } from './techpannel/techlogout/techlogout.component';
import { HrlogoutComponent } from './hrpannel/hrlogout/hrlogout.component';
import { CregisterComponent } from './candidate/cregister/cregister.component';
import { CviewStatusComponent } from './candidate/cview-status/cview-status.component';
import { HrviewComponent } from './hrpannel/hrview/hrview.component';
import { HraccessComponent } from './hrpannel/hraccess/hraccess.component';
import { CloginComponent } from './candidate/clogin/clogin.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {AdmCviewStatusComponent} from './Admin/adm-cview-status/adm-cview-status.component';
import { TRescheduleComponent } from './techpannel/t-reschedule/t-reschedule.component';
import { ClogoutComponent } from './candidate/clogout/clogout.component';
import { HrescheduleComponent } from './hrpannel/hreschedule/hreschedule.component';
import { ShowcandidateComponent } from './candidate/showcandidate/showcandidate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    TechloginComponent,
    HrloginComponent,
    TechPaccessComponent,
    TviewmemsComponent,
    TechsharedComponent,
    ShowtechComponent,
    ShowadminComponent,
    ShowhrComponent,
    AdminaccessComponent,
    AdmlogoutComponent,
    TechlogoutComponent,
    HrlogoutComponent,
    CviewStatusComponent,
    HrviewComponent,
    HraccessComponent,
    CregisterComponent,
    CloginComponent,
    AdmCviewStatusComponent,
    TRescheduleComponent,
    ClogoutComponent,
    HrescheduleComponent,
    ShowcandidateComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent,],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
