import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from '../shared/shared.module';
import { PaisesAppComponent } from './paises-app.component';
import { PaisesRoutingModule } from './paises-app.routing.module';



@NgModule({
  declarations: [
    PaisesAppComponent
  ],
  imports: [
    CommonModule,
    PaisModule,
    SharedModule,
    PaisesRoutingModule
  ],
  exports: [
    PaisesAppComponent
  ]
})
export class PaisesAppModule { }
