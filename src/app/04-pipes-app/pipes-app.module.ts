import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { PipesAppComponent } from './pipes-app.component';

//Mis Modulos
import { SharedModule } from '../shared/shared.module';
import { PipesRouterModule } from './pipes-router.module';

@NgModule({
  declarations: [
    PipesAppComponent
  ],
  imports: [
    CommonModule,
    PipesRouterModule,
    SharedModule
  ],
  exports: [
    PipesAppComponent
  ]
})
export class PipesAppModule { }
