import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebHomeRoutingModule } from './web-home-routing.module';
import { WebHomeMainComponent } from './components/web-home-main/web-home-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    WebHomeMainComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    WebHomeRoutingModule,
    SharedModule
  ]
})
export class WebHomeModule { }
