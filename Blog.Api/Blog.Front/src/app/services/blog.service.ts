import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData, PostResume, UpsertPostData } from '@ddj-models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getPost(postUrl: string): Observable<PostData> {
    return this.http.get<PostData>(`${environment.apiUrl}/posts/${postUrl}`);
  }

  getEditPost(id: number): Observable<UpsertPostData> {
    return this.http.get<UpsertPostData>(`${environment.apiUrl}/posts/bo/${id}`);
  }

  getPosts(): Observable<PostResume[]> {
    return this.http.get<PostResume[]>(`${environment.apiUrl}/posts`);
  }

  addPost(post: PostData) {
    return this.http.post(`${environment.apiUrl}/posts`, post);
  }

  updatePost(postId: number, post: PostData) {
    return this.http.put(`${environment.apiUrl}/posts/${postId}`, post);
  }
}
