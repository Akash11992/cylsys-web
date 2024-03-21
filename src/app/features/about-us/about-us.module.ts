import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsMainComponent } from './components/about-us-main/about-us-main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LifeInCylsysComponent } from './components/life-in-cylsys/life-in-cylsys.component';
import { CertificationComponent } from './components/certification/certification.component';
import { PressComponent } from './components/press/press.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CareerComponent } from './components/career/career.component';
import { TeamComponent } from './components/team/team.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { CareerFresherComponent } from './components/career-fresher/career-fresher.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CylsysEventsComponent } from './components/cylsys-events/cylsys-events.component';
import { BecameOurPartnerComponent } from './components/became-our-partner/became-our-partner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutUsMainComponent,
    AboutUsComponent,
    LifeInCylsysComponent,
    CertificationComponent,
    PressComponent,
    ClientsComponent,
    CareerComponent,
    TeamComponent,
    CaseStudiesComponent,
    CareerFresherComponent,
    ContactusComponent,
    CylsysEventsComponent,
    BecameOurPartnerComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AboutUsModule { }
