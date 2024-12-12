import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilService } from './services/util.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private _utilService: UtilService
  ) {}

  intercept(httpRequest: HttpRequest<any>, HttpHandler: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._utilService.getValueFromLocalStorage('token');
    const authorizedRequest = httpRequest.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    })
      return HttpHandler.handle(authorizedRequest)
    }
}
