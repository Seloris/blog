import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // TODO : improve observable workflow
    return Observable.create((observer: Observer<boolean>) => {
      debugger;
      this.auth
        .handleAuthentication()
        .pipe(
          finalize(() => {
            this.checkAuth(observer);
          })
        )
        .subscribe(() => {});
    });
  }

  private checkAuth(observer: Observer<boolean>) {
    if (!this.auth.isAuthenticated) {
      const token = this.auth.getToken();
      if (!!token) {
        this.auth.renewToken().subscribe(
          () => {
            this.auth.login();
            observer.next(false);
            observer.complete();
          },
          _err => {
            observer.next(false);
            observer.complete();
          }
        );
      } else {
        this.auth.login();
        observer.next(false);
        observer.complete();
      }
    } else {
      observer.next(true);
      observer.complete();
    }
  }
}
