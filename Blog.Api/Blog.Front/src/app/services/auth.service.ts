import { Injectable, Inject } from '@angular/core';
import { Auth0DecodedHash, WebAuth } from 'auth0-js';
import { Observable, Observer } from 'rxjs';
import { LocalStorageService, STORAGE_KEYS } from './local-storage.service';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private webAuth: WebAuth;

  constructor(private storage: LocalStorageService, @Inject(ORIGIN_URL) origin: string) {
    this.webAuth = new WebAuth({
      domain: 'seloris.eu.auth0.com',
      clientID: 'BqeaWucC7nWGw3wWJ6RyEYrXQ3zAySP9',
      responseType: 'token id_token',
      scope: 'openid',
      redirectUri: `${origin}/backoffice`
    });
  }

  login() {
    this.webAuth.authorize();
  }

  parseHash(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.webAuth.parseHash((err, res) => {
        if (res && res.accessToken && res.idToken) {
          const appMetaData = res.idTokenPayload['http://blog.daniel.djordjevic.fr'];
          if (appMetaData && appMetaData.roles && appMetaData.roles.indexOf('writer') !== -1) {
            // Set session
            this.setSession(res);
            observer.next(true);
            observer.complete();
          } else {
            observer.error('You are not a writer !!');
          }
        } else if (err) {
          observer.error(err);
        } else {
          // err is null when no hash to parse
          observer.next(true);
          observer.complete();
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
