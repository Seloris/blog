import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppSharedModule } from './app-shared.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [NoopAnimationsModule, AppSharedModule, ServerModule, ServerTransferStateModule, ModuleMapLoaderModule],
  bootstrap: [AppComponent],
  providers: []
})
export class AppServerModule {}
