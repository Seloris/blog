import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  constructor(private router: Router) {}

  goToPost(postUrl: string) {
    return this.router.navigate(['post', postUrl]);
  }
}
