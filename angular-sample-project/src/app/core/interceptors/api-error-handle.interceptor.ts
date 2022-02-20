import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiErrorHandleInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  getUrlPath(url: string): string {
    const parser = document.createElement('a');
    parser.href = url;
    return parser.pathname;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401: {
            // remove token and back to login
            break;
          }
          case 403: {
            // add notify or dialog
            break;
          }

          case 500: {
            // add dialog for 500 error
          }
        }

        return throwError(error);
      })
    );
  }
}
