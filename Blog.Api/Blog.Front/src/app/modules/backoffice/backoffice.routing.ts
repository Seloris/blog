import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandlePostComponent } from './pages/handle-post/handle-post.component';
import { PostListComponent } from './pages/post-list/post-list.component';

const routes: Routes = [
  { path: 'post', component: HandlePostComponent },
  { path: 'post/:id', component: HandlePostComponent },
  { path: 'posts', component: PostListComponent }
];

export const backOfficeRouting: ModuleWithProviders = RouterModule.forChild(routes);
