import { Injectable } from '@angular/core';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private _apiHttpService: ApiHttpService,
    private _apiEndpointsService: ApiEndpointsService
  ) { }
  getAllServicesApi() {
    return this._apiHttpService.get(this._apiEndpointsService.getAllServicesEndpoint());
  }
  SaveRequestEndpointApi(body: object) {
    return this._apiHttpService
      .post(this._apiEndpointsService.SaveRequestEndpoint(), body);
  } 

  getAllIndustryApi() {
    return this._apiHttpService.get(this._apiEndpointsService.getAllIndustriesEndpoint());
  }
  SavePartnerRequestEndpointApi(body: object) {
    return this._apiHttpService
      .post(this._apiEndpointsService.SavePartnerRequestEndpoint(), body);
  } 

}
