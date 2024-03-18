import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPageRoutingModule } from './web-page-routing.module';
import { WebPageMainComponent } from './components/web-page-main/web-page-main.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
  
    WebPageMainComponent
  ],
  imports: [
    CommonModule,
    WebPageRoutingModule,
    SharedModule
  ]
})
export class WebPageModule { }
