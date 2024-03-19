import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class Constants {

  public readonly API_ENDPOINT: string = environment.apiUrl;
  public readonly API_MOCK_ENDPOINT: string = environment.apiMockUrl;
  public readonly API_IS_DEVELOPMENT_ENV: boolean = environment.production;


  // services

  public readonly API_URL_GET_AllServices: string = 'RequestQuote/AllServices';

  //Request a quote
  public readonly API_URL_SaveRequest: string = 'RequestQuote/SaveRequest';
  //industry
  public readonly API_URL_GET_AllIndustries: string = 'Partner/OrgList';

  //partner request 
  public readonly API_URL_SavePartnerRequest: string = 'Partner/Savepartner';

}
