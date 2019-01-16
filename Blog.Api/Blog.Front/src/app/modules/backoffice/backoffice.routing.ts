import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandlePostComponent } from './pages/handle-post/handle-post.component';
import { PostListComponent } from './pages/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'new-post', component: HandlePostComponent },
  { path: 'posts/:id', component: HandlePostComponent }
];

export const backOfficeRouting: ModuleWithProviders = RouterModule.forChild(routes);
