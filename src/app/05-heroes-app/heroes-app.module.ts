import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesAppComponent } from './heroes-app.component';
import { HeroesRoutingModule } from './heroes-app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroesAppComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule
  ],
  exports: [
    HeroesAppComponent
  ]
})
export class HeroesAppModule { }
