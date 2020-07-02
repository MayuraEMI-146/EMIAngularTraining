import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./Features/home/home.component";
import { AboutUsComponent } from "./Features/about-us/about-us.component";
import { MenuComponent } from "./Features/menu/menu.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutUsComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
