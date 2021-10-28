import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { PipesAppComponent } from './pipes-app.component';

//Mis Modulos
import { SharedModule } from '../shared/shared.module';
import { PipesRouterModule } from './pipes-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localeEs );

@NgModule({
  declarations: [
    PipesAppComponent
  ],
  imports: [
    CommonModule,
    PipesRouterModule,
    SharedModule,
    VentasModule
  ],
  exports: [
    PipesAppComponent
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es'
  }]
})
export class PipesAppModule { }
