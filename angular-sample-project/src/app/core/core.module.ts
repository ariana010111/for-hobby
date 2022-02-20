import { NgModule, ErrorHandler, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// -----------------------------------------------------------------------------
// Interceptors
import { ApiTokenInterceptor } from './interceptors/api-token.interceptor';
import { ApiErrorHandleInterceptor } from './interceptors/api-error-handle.interceptor';
import { GlobalErrorHandlerInterceptor } from './interceptors/global-error-handle.interceptor';

// ----------------------------------------------------------------------------



@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorHandleInterceptor,
      multi: true,
    },
    {
      provide: GlobalErrorHandlerInterceptor,
      useClass: GlobalErrorHandlerInterceptor,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
