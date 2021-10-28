import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

//MisImports
import { AppComponent } from './app.component';
import { BasesModule } from './01-bases/bases.module';
import { GifAppModule } from './02-gifApp/gifApp.module';
import { AppRoutingModule } from './app-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PipesAppModule } from './04-pipes-app/pipes-app.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BasesModule,
    GifAppModule,
    AppRoutingModule,
    PipesAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
