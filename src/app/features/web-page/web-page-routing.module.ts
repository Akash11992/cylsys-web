import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPageMainComponent } from './components/web-page-main/web-page-main.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { HoliComponent } from './components/holi/holi.component';
import { RepublicComponent } from './components/republic/republic.component';
import { SportsComponent } from './components/sports/sports.component';
import { WomenDayComponent } from './components/women-day/women-day.component';

const routes: Routes = [
  {
    path:'',
    component:WebPageMainComponent,
    children:[
      {path:'sitemap', component:SitemapComponent},
      {path:'privacy-policy', component:PrivacyPolicyComponent},
      {path:'terms-of-use', component:TermsOfUseComponent},
      {path:'holi', component:HoliComponent},
      {path:'republic', component:RepublicComponent},
      {path:`women's-day`, component:WomenDayComponent},
      {path:`sports`, component:SportsComponent},

      {path:'', redirectTo:'/', pathMatch:'full'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPageRoutingModule { }
