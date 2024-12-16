import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilService } from './services/util.service';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private _utilService: UtilService,
    private authenticationService:AuthenticationService,
  ) {}

  intercept(httpRequest: HttpRequest<any>, HttpHandler: HttpHandler): Observable<HttpEvent<any>> {

    if(httpRequest.url.includes(`${this.authenticationService.host}/user/login`)){
      return HttpHandler.handle(httpRequest)
    }
    if(httpRequest.url.includes(`${this.authenticationService.host}/user/register`)){
      return HttpHandler.handle(httpRequest)
    }


    const token = this._utilService.getValueFromLocalStorage('token');

    
    const authorizedRequest = httpRequest.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    })
      return HttpHandler.handle(authorizedRequest)
    }
}
