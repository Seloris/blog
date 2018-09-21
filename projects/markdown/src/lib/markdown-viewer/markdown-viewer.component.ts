import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'md-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.css']
})
export class MarkdownViewerComponent implements OnInit {
  @Input()
  markdown: string;

  constructor() {}

  ngOnInit() {}
}
