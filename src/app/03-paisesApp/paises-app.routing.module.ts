import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from "../app-routing.module";

//Mis Imports
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

export const routesPaises: Routes = [
  { path: 'paisesapp', component: PorPaisComponent },
  { path: 'paisesapp/pais', component: PorPaisComponent },
  { path: 'paisesapp/region', component: PorRegionComponent },
  { path: 'paisesapp/capital', component: PorCapitalComponent },
  { path: 'paisesapp/pais/:id', component: VerPaisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routesPaises)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }

    