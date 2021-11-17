import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PaisesAppComponent } from './paises-app.component';

export const routesPaises: Routes = [
  { path: '', component: PaisesAppComponent,
    children: [
      { path: '', component: PorPaisComponent },
      { path: 'pais', component: PorPaisComponent },
      { path: 'region', component: PorRegionComponent },
      { path: 'capital', component: PorCapitalComponent },
      { path: 'pais/:id', component: VerPaisComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesPaises)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }

