import { Component, OnInit } from '@angular/core';
import { Post, PostResume } from '@ddj-models';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'ddj-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  posts: PostResume[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
