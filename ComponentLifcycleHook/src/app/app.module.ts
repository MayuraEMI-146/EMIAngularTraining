import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentHookComponent } from './parent-hook/parent-hook.component';
import { ChildHookComponent } from './child-hook/child-hook.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentHookComponent,
    ChildHookComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
