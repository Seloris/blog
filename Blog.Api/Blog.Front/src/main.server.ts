import { enableProdMode } from '@angular/core';
import { IEngineOptions, ngAspnetCoreEngine } from '@nguniversal/aspnetcore-engine';
import { createServerRenderer } from 'aspnet-prerendering';
import 'zone.js/dist/zone-node';
import { AppServerModule } from './app/app.server.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export default createServerRenderer(params => {
  // console.log(JSON.stringify(params));

  const setupOptions: IEngineOptions = {
    appSelector: '<ddj-root></ddj-root>',
    ngModule: AppServerModule,
    request: params,
    providers: []
  };

  return ngAspnetCoreEngine(setupOptions).then(response => {
    return {
      html: response.html
    };
  });
});
