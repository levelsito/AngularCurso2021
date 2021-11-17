import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

//Mis Imports
import { HeroesModule } from './heroes/heroe.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { BasesComponent } from './bases.component';

@NgModule({
  declarations: [
    BasesComponent
  ],
  imports: [
    CommonModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  exports: [
    BasesComponent
  ]
})
export class BasesModule { }
