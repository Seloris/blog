import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';

const routes: Routes = [{ path: 'add-post', component: AddPostComponent }];

export const backOfficeRouting: ModuleWithProviders = RouterModule.forChild(routes);
