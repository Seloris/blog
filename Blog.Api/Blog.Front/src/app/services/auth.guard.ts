import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, Observer, of } from 'rxjs';
import { AuthService } from './auth.service';
import { finalize, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // TODO : improve observable workflow
    return Observable.create((observer: Observer<boolean>) => {
      this.auth
        .parseHash()
        .pipe(
          finalize(() => {
            this.checkAuth(observer);
          })
        )
        .subscribe(success => {});
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
