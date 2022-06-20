import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '@core/services/authentication.service';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError(
          err => {
            if ([401, 403].includes(err.status) && this.authenticationService.userValue) {
              // auto logout if 401 or 403 response returned from api
              //this.authenticationService.logout();
            }

            const error = (err && err.error && err.error.message) || err.statusText;
            console.error(err);
            throw error;
          }))
  }
}