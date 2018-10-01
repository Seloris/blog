import { Component, OnInit, Input } from '@angular/core';
import { PostResume } from '../../models/post-resume';

@Component({
  selector: 'app-post-resume-list',
  templateUrl: './post-resume-list.component.html',
  styleUrls: ['./post-resume-list.component.scss']
})
export class PostResumeListComponent implements OnInit {
  @Input()
  posts: PostResume[];
  constructor() {}

  ngOnInit() {
    this.posts = this.posts
      .concat(this.posts)
      .concat(this.posts)
      .concat(this.posts)
      .concat(this.posts)
      .concat(this.posts)
      .concat(this.posts)
      .concat(this.posts)
      .concat(this.posts)
      .concat(this.posts)
      .concat(this.posts);
  }
}
