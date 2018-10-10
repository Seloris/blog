import { Component, OnInit } from '@angular/core';
import { Post, PostResume } from '@ddj-models';
import { BlogService } from '../../services/blog.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ddj-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  isLoadingPosts = true;
  posts: PostResume[];
  error: string;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService
      .getPosts()
      .pipe(finalize(() => (this.isLoadingPosts = false)))
      .subscribe(
        posts => {
          this.posts = posts;
        },
        _err => {
          this.error = 'Une erreur est survenue';
        }
      );
  }
}
