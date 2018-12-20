import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { services } from './app.metas';
import { appRouting } from './app.routing';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SharedModule } from './modules/shared/shared.module';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
import { MarkdownModule } from 'ngx-markdown';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, PageHomeComponent, PostCardComponent, PagePostComponent, HeaderComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    appRouting,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: services,
  bootstrap: [AppComponent]
})
export class AppModule {}
