import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SharedModule } from './modules/shared/shared.module';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
import { AuthInterceptor } from './services/auth-interceptor';

@NgModule({
  declarations: [AppComponent, PageHomeComponent, PostCardComponent, PagePostComponent, HeaderComponent],
  imports: [HttpClientModule, BrowserModule.withServerTransition({ appId: 'serverApp' }), appRouting, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppSharedModule {}
