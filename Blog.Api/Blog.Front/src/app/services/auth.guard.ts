import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot, auth: AuthService): Observable<boolean> {
    Observable.create((observer: Observer<boolean>) => {

    });
    const token = auth.getToken();
    if (token) {
      aut;
    }
    // if (!this.auth.isAuthenticated) {
    //   if (this.autService.hasToken) {
    //     this.autService.renewToken().subscribe(() => {}, () => this.autService.login());
    //   } else {
    //     this.autService.login();
    //   }
    // }
  }
}
