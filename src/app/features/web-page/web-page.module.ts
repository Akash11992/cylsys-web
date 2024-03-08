import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPageRoutingModule } from './web-page-routing.module';
import { WebPageMainComponent } from './components/web-page-main/web-page-main.component';


@NgModule({
  declarations: [
  
    WebPageMainComponent
  ],
  imports: [
    CommonModule,
    WebPageRoutingModule
  ]
})
export class WebPageModule { }
