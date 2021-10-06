import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//MisImports
import { HeroesModule } from './heroes/heroe.module';
import { ContadorModule } from "./contador/contador.module";

@NgModule({
  declarations: [
    AppComponent
    // ContadorComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
