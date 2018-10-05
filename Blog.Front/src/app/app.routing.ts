import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';

const routes: Routes = [{ path: '', component: PageHomeComponent }];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
