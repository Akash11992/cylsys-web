import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiHttpService } from './services/api-http.service';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { Constants } from '../config/constant';


@NgModule({
  declarations: [],
  providers:[Constants,
    ApiHttpService,
    ApiEndpointsService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
