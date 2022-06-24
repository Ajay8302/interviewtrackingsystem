import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmCviewStatusComponent } from './Admin/adm-cview-status/adm-cview-status.component';
import { AdminaccessComponent } from './Admin/adminaccess/adminaccess.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdmlogoutComponent } from './Admin/admlogout/admlogout.component';
import { ShowadminComponent } from './Admin/showadmin/showadmin.component';
import { AuthGuard } from './auth/auth.guard';
import { CloginComponent } from './candidate/clogin/clogin.component';
import { ClogoutComponent } from './candidate/clogout/clogout.component';
import { CregisterComponent } from './candidate/cregister/cregister.component';
import { CviewStatusComponent } from './candidate/cview-status/cview-status.component';
import { ShowcandidateComponent } from './candidate/showcandidate/showcandidate.component';
import { HomeComponent } from './home/home.component';
import { HraccessComponent } from './hrpannel/hraccess/hraccess.component';
import { HrescheduleComponent } from './hrpannel/hreschedule/hreschedule.component';
import { HrloginComponent } from './hrpannel/hrlogin/hrlogin.component';
import { HrlogoutComponent } from './hrpannel/hrlogout/hrlogout.component';
import { HrviewComponent } from './hrpannel/hrview/hrview.component';
import { ShowhrComponent } from './hrpannel/showhr/showhr.component';
import { ShowtechComponent } from './techpannel/showtech/showtech.component';
import { TRescheduleComponent } from './techpannel/t-reschedule/t-reschedule.component';
import { TechPaccessComponent } from './techpannel/tech-paccess/tech-paccess.component';
import { TechloginComponent } from './techpannel/techlogin/techlogin.component';
import { TechlogoutComponent } from './techpannel/techlogout/techlogout.component';
import { TechsharedComponent } from './techpannel/techshared/techshared.component';
import { TviewmemsComponent } from './techpannel/tviewmems/tviewmems.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'adminlogin',
    component:AdminloginComponent,
  },
  {
    path:'techlogin',
    component:TechloginComponent,
  },
  {
    path:'tech-paccess',
    component:TechPaccessComponent,
  },
  {
    path:'hrlogin',
    component:HrloginComponent,
  },
  {
    path:'tviewmems',
    component:TviewmemsComponent,
  },

  {
    path:'techshared',
    component:TechsharedComponent,
  },
  {
    path:'techlogin',
    component:TechloginComponent,
  },
  {
    path:'showtech',
    component:ShowtechComponent,
  },
  {
    path:'showadmin',
    component:ShowadminComponent,
  },
  {
    path:'showhr',
    component:ShowhrComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'adminaccess',
    component:AdminaccessComponent,
  },
  {
    path:'admlogout',
    component:AdmlogoutComponent,
  },
  {
    path:'techlogout',
    component:TechlogoutComponent,
  },
  {
    path:'hrlogout',
    component:HrlogoutComponent,
  },
  {
    path:'cregister',
    component:CregisterComponent,
  },
  {
    path:'adm-cview-status',
    component:AdmCviewStatusComponent,
  },
  {
    path:'hrview',
    component:HrviewComponent,
  },
  {
    path:'hraccess',
    component:HraccessComponent,
  },
  {
    path:'clogin',
    component: CloginComponent,
  },
  {
    path:'t-reschedule',
    component:TRescheduleComponent,
  },
  {
    path:'clogout',
    component:ClogoutComponent,
  },
  {
    path:'hreschedule',
    component:HrescheduleComponent,
  },
  {
    path:'showcandidate',
    component:ShowcandidateComponent,
  },
  {
    path:'cview-status',
    component:CviewStatusComponent,
  }

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
