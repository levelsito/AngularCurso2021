import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//MisImports
import { BasesModule } from './01-bases/bases.module';
import { GifAppModule } from './02-gifApp - app/gifApp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasesModule,
    GifAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
