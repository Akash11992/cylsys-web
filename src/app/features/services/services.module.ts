import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SoftwareDevelopmentComponent } from './components/software-development/software-development.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { MobileAppDevelopmentComponent } from './components/mobile-app-development/mobile-app-development.component';
import { UiUxDesignComponent } from './components/ui-ux-design/ui-ux-design.component';
import { ChatbotsComponent } from './components/chatbots/chatbots.component';
import { QaTestingComponent } from './components/qa-testing/qa-testing.component';
import { SoftwareConsultingComponent } from './components/software-consulting/software-consulting.component';
import { CloudMigrationComponent } from './components/cloud-migration/cloud-migration.component';
import { HireDeveloperComponent } from './components/hire-developer/hire-developer.component';
import { AmcApplicationComponent } from './components/amc-application/amc-application.component';
import { UnicornOpsComponent } from './components/unicorn-ops/unicorn-ops.component';
import { ServicesMainComponent } from './components/services-main/services-main.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SoftwareDevelopmentComponent,
    DigitalMarketingComponent,
    ECommerceComponent,
    MobileAppDevelopmentComponent,
    UiUxDesignComponent,
    ChatbotsComponent,
    QaTestingComponent,
    SoftwareConsultingComponent,
    CloudMigrationComponent,
    HireDeveloperComponent,
    AmcApplicationComponent,
    UnicornOpsComponent,
    ServicesMainComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
