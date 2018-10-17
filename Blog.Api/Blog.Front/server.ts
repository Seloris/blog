import 'zone.js/dist/zone-node';
import 'reflect-metadata';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

import { enableProdMode } from '@angular/core';
import { IEngineOptions, ngAspnetCoreEngine } from '@nguniversal/aspnetcore-engine';
import { createServerRenderer } from 'aspnet-prerendering';
import { environment } from './src/environments/environment';

if (environment.production) {
  enableProdMode();
}

export default createServerRenderer(params => {
  const setupOptions: IEngineOptions = {
    appSelector: '<ddj-root></ddj-root>',
    ngModule: AppServerModuleNgFactory,
    request: params,
    providers: []
  };

  return ngAspnetCoreEngine(setupOptions).then(response => {
    return {
      html: response.html
    };
  });
});
