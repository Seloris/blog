import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '@ddj-models';
import { BlogService } from 'src/app/services/blog.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ddj-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {
  isLoading = true;
  error = '';
  post: Post;

  constructor(route: ActivatedRoute, private blogService: BlogService) {
    route.params.subscribe(p => {
      const postUrl = p['postUrl'];
      this.loadPostAsync(postUrl);
    });
  }

  ngOnInit() {}

  loadPostAsync(postUrl: string) {
    if (!postUrl) {
      this.isLoading = false;
      this.error = "L'url est invalide";
    }

    this.isLoading = true;
    this.blogService
      .getPost(postUrl)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        post => {
          this.post = post;
        },
        err => {
          this.error = err.message;
        }
      );
  }
}
