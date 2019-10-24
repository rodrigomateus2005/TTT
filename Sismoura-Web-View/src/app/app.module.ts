import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SismouraWebControlsModule } from 'sismoura-web-controls/src/lib/sismoura-web-controls.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SismouraWebControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
