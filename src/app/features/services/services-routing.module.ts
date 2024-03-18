import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesMainComponent } from './components/services-main/services-main.component';
import { SoftwareDevelopmentComponent } from './components/software-development/software-development.component';
import { MobileAppDevelopmentComponent } from './components/mobile-app-development/mobile-app-development.component';
import { QaTestingComponent } from './components/qa-testing/qa-testing.component';
import { HireDeveloperComponent } from './components/hire-developer/hire-developer.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { UiUxDesignComponent } from './components/ui-ux-design/ui-ux-design.component';
import { SoftwareConsultingComponent } from './components/software-consulting/software-consulting.component';
import { AmcApplicationComponent } from './components/amc-application/amc-application.component';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { ChatbotsComponent } from './components/chatbots/chatbots.component';
import { CloudMigrationComponent } from './components/cloud-migration/cloud-migration.component';
import { UnicornOpsComponent } from './components/unicorn-ops/unicorn-ops.component';

const routes: Routes = [
  {
    path:'',
    component:ServicesMainComponent,
    children:[
      {path:'software-development', component:SoftwareDevelopmentComponent},
      {path:'mobile-app-development', component:MobileAppDevelopmentComponent},
      {path:'qa-testing', component:QaTestingComponent},
      {path:'hire-developer', component:HireDeveloperComponent},
      {path:'digital-marketing', component:DigitalMarketingComponent},
      {path:'ui-ux-design', component:UiUxDesignComponent},
      {path:'software-consulting', component:SoftwareConsultingComponent},
      {path:'amc-application', component:AmcApplicationComponent},
      {path:'ecommerce', component:ECommerceComponent},
      {path:'chatbots', component:ChatbotsComponent},
      {path:'cloud-migration', component:CloudMigrationComponent},
      {path:'unicorn-ops', component:UnicornOpsComponent},
      {path:'', redirectTo:'/', pathMatch:'full'}
    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
