import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsMainComponent } from './components/about-us-main/about-us-main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LifeInCylsysComponent } from './components/life-in-cylsys/life-in-cylsys.component';
import { TeamComponent } from './components/team/team.component';
import { CylsysEventsComponent } from './components/cylsys-events/cylsys-events.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PressComponent } from './components/press/press.component';
import { CareerComponent } from './components/career/career.component';
import { CareerFresherComponent } from './components/career-fresher/career-fresher.component';
import { BecameOurPartnerComponent } from './components/became-our-partner/became-our-partner.component';

const routes: Routes = [
  {
    path:'',
    component:AboutUsMainComponent,
    children:[
      {path:'aboutus', component:AboutUsComponent},
      {path:'life-in-cylsys', component:LifeInCylsysComponent},
      {path:'team', component:TeamComponent},
      {path:'events', component:CylsysEventsComponent},
      {path:'certification', component:CertificationComponent},
      {path:'clients', component:ClientsComponent},
      {path:'case-studies', component:CaseStudiesComponent},
      {path:'contactus', component:ContactusComponent},
      {path:'press', component:PressComponent},
      {path:'career', component:CareerComponent},
      {path:'career-fresher', component:CareerFresherComponent},
      {path:'become_our_partner', component:BecameOurPartnerComponent},
      {path:'sitemap', component:TeamComponent},

      {path:'', redirectTo:'/', pathMatch:'full'}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
