import { ApplicationRef, NgZone } from "@angular/core";
import {
  INITIAL_CONFIG,
  platformDynamicServer,
  PlatformState
} from "@angular/platform-server";
import { createServerRenderer, RenderResult } from "aspnet-prerendering";
import { first } from "rxjs/operators";
import { AppModule } from "./src/app/app.module";

export default createServerRenderer(params => {
  const providers = [
    {
      provide: INITIAL_CONFIG,
      useValue: { document: "<app></app>", url: params.url }
    },
    { provide: "ORIGIN_URL", useValue: params.origin }
  ];

  return platformDynamicServer(providers)
    .bootstrapModule(AppModule)
    .then(moduleRef => {
      const appRef = moduleRef.injector.get(ApplicationRef);
      const state = moduleRef.injector.get(PlatformState);
      const zone = moduleRef.injector.get(NgZone);

      return new Promise<RenderResult>((resolve, reject) => {
        zone.onError.subscribe(errorInfo => reject(errorInfo));
        appRef.isStable.pipe(first(isStable => isStable)).subscribe(() => {
          // Because 'onStable' fires before 'onError', we have to delay slightly before
          // completing the request in case there's an error to report
          setImmediate(() => {
            resolve({
              html: state.renderToString()
            });
            moduleRef.destroy();
          });
        });
      });
    });
});
