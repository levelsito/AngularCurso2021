import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { FormulariosAppComponent } from './formularios-app.component';
import { FormulariosAppRoutingModule } from './formulario-app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FormulariosAppComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormulariosAppRoutingModule
  ],
  exports: [
    FormulariosAppComponent
  ]
})
export class FormulariosAppModule { }
