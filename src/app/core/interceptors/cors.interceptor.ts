import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment.local';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  private serverhost = environment.severhost;
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloned = request.clone({
      headers: request.headers.set('Origin', this.serverhost)
    });
    return next.handle(cloned);
  }
}
