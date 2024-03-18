import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { WebHomeRoutingModule } from './web-home-routing.module';
import { WebHomeMainComponent } from './components/web-home-main/web-home-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    WebHomeMainComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    WebHomeRoutingModule,
    SharedModule,    
    NgxTypedJsModule,

  ]
})
export class WebHomeModule { }
