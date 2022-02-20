import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // define custom headers variable
    const customHeaders: any = {};

    // add auth token to the header
    if (
      !req.url.startsWith('http://') &&
      !req.url.startsWith('https://') &&
      AuthService._authToken &&
      AuthService._authToken != ''
    ) {
      customHeaders['Authorization'] = AuthService._authToken;
    }

    // create new reuest
    const newReq = req.clone({ setHeaders: customHeaders });

    // send request
    return next.handle(newReq);
  }
}
