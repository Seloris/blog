import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  delete(key: string) {
    localStorage.removeItem(key);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }
}

export const STORAGE_KEYS = {
  AccessToken: 'access_token',
  IdToken: 'id_token',
  ExpiresAt: 'expires_at'
};
