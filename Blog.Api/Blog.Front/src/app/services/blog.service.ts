import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostResume, PostData } from '@ddj-models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getPost(postUrl: string): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${postUrl}`);
  }

  getPosts(): Observable<PostResume[]> {
    return this.http.get<PostResume[]>(`${environment.apiUrl}/posts`);
  }

  addPost(post: PostData) {
    return this.http.post(`${environment.apiUrl}/posts`, post);
  }

  updatePost(postId: number, post: PostData) {
    return this.http.post(`${postId}`, post);
  }
}
