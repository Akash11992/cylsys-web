import { Injectable } from '@angular/core';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private _toastr : ToastrService,
    private _apiHttpService: ApiHttpService,
    private _apiEndpointsService: ApiEndpointsService
  ) { }


  getToastPopup(errorMsg: string, errorModule: string, errorType: string) {
    switch (errorType) {
      case 'error':
        this._toastr.error(errorMsg, errorModule, {
          progressBar: true,
        });

        break;

      case 'info':
        this._toastr.info(errorMsg, errorModule, {
          progressBar: true,
        });

        break;

      case 'success':
        this._toastr.success(errorMsg, errorModule, {
          progressBar: true,
        });

        break;
    }
  }
 

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
