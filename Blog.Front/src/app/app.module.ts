import { isPlatformBrowser } from "@angular/common";
import { APP_ID, Inject, NgModule, PLATFORM_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { PrebootModule } from "preboot";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: "blog" }),
    FormsModule,
    HttpModule,
    PrebootModule.withConfig({ appRoot: "app-root" })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? "in the browser"
      : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
