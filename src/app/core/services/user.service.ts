import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { environment } from '@environment/environment.local';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.baseUrl;
  private _currentUser$ = new BehaviorSubject<User | boolean>(false);
  currentUser$ = this._currentUser$.asObservable();

  constructor(private authService: AuthService, private http: HttpClient, private logger: NGXLogger) {
    this.initializeUser();
  }


  initializeUser() {
    const user = this.getUserLocalStorage();
    if (user) {
      this._currentUser$.next(JSON.parse(user));
    }
  }

  getUser() {
    return this._currentUser$.value;
  }

  refreshUser() {
    this.http.get<User>(this.apiUrl + '/user').subscribe({
      next: (user: User) => {
        this.setUserLocalStorage(user);
      },
      error: (err) => {
        this.logger.error("An error occurred while refreshing user", err);
      }
    });
  }


  getUserLocalStorage() {
    return localStorage.getItem("user");
  }

  setUserLocalStorage(user: User) {
    this._currentUser$.next(user);
    localStorage.setItem("user", JSON.stringify(this._currentUser$.value));
  }

  removeUserLocalStorage() {
    this._currentUser$.next(false);
    localStorage.removeItem("user");
  }
}
