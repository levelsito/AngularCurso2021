import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

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
    CommonModule,
    GifsModule,
    HttpClientModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifAppModule { }
