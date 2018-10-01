import { Component, OnInit } from '@angular/core';
import { PostResume } from '../../models/post-resume';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  posts: PostResume[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts({ skip: 0, take: 5 }).subscribe(posts => (this.posts = posts));
  }
}
