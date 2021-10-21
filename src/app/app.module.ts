import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


//MisImports
import { AppComponent } from './app.component';
import { BasesModule } from './01-bases/bases.module';
import { GifAppModule } from './02-gifApp/gifApp.module';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { PaisesAppModule } from './03-paisesApp/paises-app.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BasesModule,
    GifAppModule,
    AppRoutingModule,
    PaisesAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
