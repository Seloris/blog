import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { backOfficeRouting } from './backoffice.routing';
import { AddPostComponent } from './components/add-post/add-post.component';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [CommonModule, backOfficeRouting, MarkdownModule.forRoot()],
  declarations: [AddPostComponent]
})
export class BackOfficeModule {}
