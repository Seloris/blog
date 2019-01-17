import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { AppSharedModule } from './app-shared.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './services/auth-interceptor';

@NgModule({
  imports: [BrowserAnimationsModule, AppSharedModule],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: ORIGIN_URL,
      useFactory: () => window.location.origin
    }
  ]
})
export class AppBrowserModule {}
