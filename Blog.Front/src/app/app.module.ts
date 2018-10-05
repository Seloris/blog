import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { services } from './app.metas';
import { appRouting } from './app.routing';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostComponent } from './components/post/post.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

@NgModule({
  declarations: [AppComponent, PageHomeComponent, PostComponent, PostCardComponent],
  imports: [HttpClientModule, BrowserModule.withServerTransition({ appId: 'serverApp' }), appRouting],
  providers: services,
  bootstrap: [AppComponent]
})
export class AppModule {}
