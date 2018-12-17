import { Component, OnInit } from '@angular/core';
import { PostResume } from '@ddj-models';
import { BlogService } from '@ddj-services';

@Component({
  selector: 'ddj-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  displayedColumns = ['title', 'url', 'creationDate', 'publicationDate', 'actions'];
  posts: PostResume[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
