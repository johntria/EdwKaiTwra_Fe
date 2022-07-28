import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Tokens } from '@core/models/tokens';
import { AuthService } from '@core/services/auth.service';
import { NGXLogger } from 'ngx-logger';
import { catchError, Observable, of } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private logger: NGXLogger, private router: Router) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    //We donn't want to add the token in the login or register. We early exit from the interceptor 
    if (req.url.includes('login') || req.url.includes('register') || req.url.includes('/token/refresh')) {
      this.logger.info("Skipping adding the token to the request due to the user try to login or register or refresh token");
      return next.handle(req);
    }

    //We validate that the access token exists
    let cloned = req.clone({
      headers: req.headers.set("Authorization",
        "Bearer " + this.authService.getAccessToken())
    });
    return next.handle(cloned).pipe(
      catchError(
        err => {
          this.logger.warn("Error while trying to validate with access token.", err);
          return this.handleError(err);

        }
      )
    );

  }

  //We have to handle the 403 error
  handleError(error: any) {
    this.logger.info("Catched prev error, trying to handle with refresh token");

    this.authService.refreshToken().subscribe({
      next: (tokens: Tokens) => {
        this.logger.info("Refresh token successfully retrieved, storing the new tokens");
        this.authService.storeTokens(tokens);
      },
      error: (err) => {
        this.logger.error("Error refreshing token", err);
        this.authService.logout();
        this.router.navigate(['login']);
      }
    }
    );

    return of();
  }
}
