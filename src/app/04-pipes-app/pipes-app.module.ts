import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { PipesAppComponent } from './pipes-app.component';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    PipesAppComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    PipesAppComponent
  ]
})
export class PipesAppModule { }
