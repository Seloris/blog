import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostData } from '@ddj-models';
import { finalize } from 'rxjs/operators';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'ddj-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {
  isLoading = true;
  error = '';
  post: PostData;

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
