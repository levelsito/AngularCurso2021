import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesAppComponent } from './pipes-app.component';

//Mis Imports
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routesPipes: Routes = [
  { path: '', component: PipesAppComponent,
    children: [
      { path: '', component: BasicosComponent },
      { path: 'no-comunes', component: NoComunesComponent },
      { path: 'numeros', component: NumerosComponent },
      { path: 'ordenar', component: OrdenarComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routesPipes)],
  exports: [RouterModule]
})
export class PipesRouterModule { }
