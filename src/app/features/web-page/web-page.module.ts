import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPageRoutingModule } from './web-page-routing.module';
import { WebPageMainComponent } from './components/web-page-main/web-page-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HoliComponent } from './components/holi/holi.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RepublicComponent } from './components/republic/republic.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { SportsComponent } from './components/sports/sports.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { WomenDayComponent } from './components/women-day/women-day.component';


@NgModule({
  declarations: [
  
    WebPageMainComponent,
       HoliComponent,
       PrivacyPolicyComponent,
       RepublicComponent,
       SitemapComponent,
       SportsComponent,
       TermsOfUseComponent,
       WomenDayComponent
  ],
  imports: [
    CommonModule,
    WebPageRoutingModule,
    SharedModule
  ]
})
export class WebPageModule { }
