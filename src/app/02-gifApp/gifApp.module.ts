import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { GifAppComponent } from "./gifApp.component";

@NgModule({
  declarations: [
    GifAppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifAppModule { }
