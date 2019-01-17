import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSharedModule } from './app-shared.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './services/auth-interceptor';
@NgModule({
  imports: [BrowserAnimationsModule, AppSharedModule],
  bootstrap: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AppBrowserModule {}
