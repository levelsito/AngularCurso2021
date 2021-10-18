import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

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
    GifsModule,
    HttpClientModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifAppModule { }
