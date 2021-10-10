import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';

@NgModule({
  declarations: [
    GifsPageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule
  ]
})
export class GifAppModule { }
