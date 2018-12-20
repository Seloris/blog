import { enableProdMode } from '@angular/core';
import { IEngineOptions, ngAspnetCoreEngine } from '@nguniversal/aspnetcore-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { createServerRenderer } from 'aspnet-prerendering';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { environment } from './src/environments/environment';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

if (environment.production) {
  enableProdMode();
}

export default createServerRenderer(params => {
  const setupOptions: IEngineOptions = {
    appSelector: '<ddj-root></ddj-root>',
    ngModule: AppServerModuleNgFactory,
    request: params,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  };

  return ngAspnetCoreEngine(setupOptions).then(response => {
    return {
      html: response.html,
      globals: response.globals
    };
  });
});
