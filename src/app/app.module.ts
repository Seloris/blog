import { NgModule, DoBootstrap, ApplicationRef, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule } from 'markdown';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostResumeListComponent } from './components/post-resume-list/post-resume-list.component';
import { initFactory } from './app.init';

@NgModule({
  declarations: [AppComponent, HomePageComponent, PostResumeListComponent],
  imports: [
    appRouting,
    BrowserModule,
    MarkdownModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
