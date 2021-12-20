import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { FormulariosAppComponent } from './formularios-app.component';
import { FormulariosAppRoutingModule } from './formulario-app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FormulariosAppComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormulariosAppRoutingModule
  ],
  exports: [
    FormulariosAppComponent
  ]
})
export class FormulariosAppModule { }
