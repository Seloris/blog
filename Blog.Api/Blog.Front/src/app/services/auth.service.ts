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
      domain: 'seloris.eu.auth0.com',
      clientID: 'BqeaWucC7nWGw3wWJ6RyEYrXQ3zAySP9',
      responseType: 'token id_token',
      scope: 'openid',
      redirectUri: 'http://localhost:4200/backoffice/posts'
    });
  }

  login() {
    this.webAuth.authorize();
  }

  handleAuthentication(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.webAuth.parseHash((err, res) => {
        if (res && res.accessToken && res.idToken) {
          // Set session
          this.setSession(res);
          observer.next(true);
          observer.complete();
        } else {
          observer.error(err);
        }
      });
    });
  }

  get isAuthenticated() {
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
