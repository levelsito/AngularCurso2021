import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// Mis imports
import { GifsModule } from './gifs/gifs.module';
import { GifAppComponent } from "./gif-app.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { GifRoutingModule } from './gif-app.routing.module';

@NgModule({
  declarations: [
    GifAppComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    GifsModule,
    GifRoutingModule
  ],
  exports: [
    GifAppComponent
  ]
})
export class GifAppModule { }
