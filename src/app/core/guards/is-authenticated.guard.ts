import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IsAuthenticatedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  /**
  * This guard is used to check if the user is logged in or not.  
  * When the user is logged in we redirect instantly  to the home page.
  * For example, if the user is logged in we don't want to visit the login,register page so we redirect them to the home page.
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn)
      this.router.navigate(['home'])
    return true;
  }

}

