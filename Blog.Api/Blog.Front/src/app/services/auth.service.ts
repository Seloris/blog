import { Injectable } from '@angular/core';
import { Auth0DecodedHash, WebAuth } from 'auth0-js';
import { Observable, Observer } from 'rxjs';
import { LocalStorageService, STORAGE_KEYS } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private webAuth: WebAuth;

  constructor(private storage: LocalStorageService) {
    this.webAuth = new WebAuth({
      domain: 'YOUR_AUTH0_DOMAIN',
      clientID: 'YOUR_CLIENT_ID',
      responseType: 'token id_token',
      scope: 'openid',
      redirectUri: window.location.href
    });
  }

  login() {
    this.webAuth.authorize();
  }

  handleAuthentication(): Observable<void> {
    return Observable.create((observer: Observer<void>) => {
      this.webAuth.parseHash((err, res) => {
        if (res && res.accessToken && res.idToken) {
          // Set session
          this.setSession(res);
          observer.next();
        } else {
          observer.error(err);
        }
      });
    });
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(this.storage.get(STORAGE_KEYS.ExpiresAt));
    return new Date().getTime() < expiresAt;
  }

  renewToken(): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      this.webAuth.checkSession({}, (err, res) => {
        if (err) {
          observer.error(err);
        } else {
          this.setSession(res);
          observer.next(res.idToken);
        }
      });
    });
  }

  getToken() {
    return this.storage.get(STORAGE_KEYS.IdToken);
  }

  logout() {
    // Remove tokens and expiry time from localStorage
    this.storage.delete(STORAGE_KEYS.AccessToken);
    this.storage.delete(STORAGE_KEYS.ExpiresAt);
    this.storage.delete(STORAGE_KEYS.IdToken);
  }

  private setSession(res: Auth0DecodedHash) {
    this.storage.set(STORAGE_KEYS.AccessToken, res.accessToken);
    this.storage.set(STORAGE_KEYS.IdToken, res.idToken);
    const expiresAt = JSON.stringify(res.expiresIn * 1000 + new Date().getTime());
    this.storage.set(STORAGE_KEYS.ExpiresAt, expiresAt);
  }
}
