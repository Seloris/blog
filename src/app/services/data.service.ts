import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostResume } from '../models/post-resume';
import { Paginated } from '../models/paginated';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getPosts(paginated: Paginated): Observable<PostResume[]> {
    return of(this.getItem<PostResume[]>('POSTS'));
  }

  private getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key)) as T;
  }
}
