import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PagePostComponent } from './pages/page-post/page-post.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'posts/:postUrl', component: PagePostComponent },
  { path: 'backoffice', loadChildren: './modules/backoffice/backoffice.module#BackOfficeModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
