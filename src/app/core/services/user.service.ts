import { Injectable } from '@angular/core';
import { environment } from '@environment/environment.local';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.baseUrl;

  constructor(private authService: AuthService) {
    this.initializeUser();
  }
  initializeUser() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        alert('logged in');
      }
      else {
        alert('not logged in');
      }
    }
    );
  }


}
