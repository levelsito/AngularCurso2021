import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesAppComponent } from './heroes-app.component';
import { HeroesAppRoutingModule } from './heroes-app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroesAppComponent
  ],
  imports: [
    CommonModule,
    HeroesAppRoutingModule,
    SharedModule
  ],
  exports: [
    HeroesAppComponent
  ]
})
export class HeroesAppModule { }
