import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GifsModule } from './gifs/gifs.module';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { GifAppComponent } from "./gifApp.component";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    GifAppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    GifsModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifAppModule { }
