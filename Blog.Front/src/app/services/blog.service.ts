import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostResume } from '@ddj-models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostResume[]> {
    return this.http.get<PostResume[]>(`${environment.apiUrl}/posts`);
  }
}
