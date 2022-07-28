import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tokens } from '@core/models/tokens';
import { environment } from '@environment/environment.local';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.baseUrl;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  constructor(private http: HttpClient, private userService: UserService) {
    this._isLoggedIn$.next(!!this.getAccessToken());
  }

  login(body: { email: string, password: string }): Observable<Tokens> {
    return this.http.post<Tokens>(`${this.apiUrl}/open/login`, body);
  }

  logout() {
    this.removeTokens();
    this.userService.removeUserLocalStorage();
  }

  refreshToken() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.getRefreshToken()}`)
    }
    return this.http.get<any>(this.apiUrl + `/open/auth/token/refresh`, header);

  }

  getAccessToken() {
    return localStorage.getItem("access_token");
  }

  getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }

  storeTokens(tokens: Tokens) {
    this._isLoggedIn$.next(true);
    localStorage.setItem("access_token", tokens.access_token);
    localStorage.setItem("refresh_token", tokens.refresh_token);
    this.userService.refreshUser();
  }

  removeTokens() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

  }


}
