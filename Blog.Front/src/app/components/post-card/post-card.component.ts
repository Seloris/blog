import { Component, OnInit, Input } from '@angular/core';
import { PostResume } from '@ddj-models';

@Component({
  selector: 'ddj-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input()
  post: PostResume;
  constructor() {}

  ngOnInit() {}
}
