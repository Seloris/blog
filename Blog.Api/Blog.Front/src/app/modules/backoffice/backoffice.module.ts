import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';
import { backOfficeRouting } from './backoffice.routing';
import { HandlePostComponent } from './pages/handle-post/handle-post.component';
import { PostListComponent } from './pages/post-list/post-list.component';

@NgModule({
  imports: [CommonModule, backOfficeRouting, MarkdownModule.forRoot(), ReactiveFormsModule, SharedModule],
  declarations: [PostListComponent, HandlePostComponent]
})
export class BackOfficeModule {}
