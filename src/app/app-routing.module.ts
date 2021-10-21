import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { BasesComponent } from './01-bases/bases.component';
import { GifAppComponent } from './02-gifApp/gifApp.component';
import { MenuComponent } from './menu/menu.component';
import { PaisesAppComponent } from './03-paisesApp/paises-app.component';
import { VerPaisComponent } from './03-paisesApp/pais/pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './03-paisesApp/pais/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './03-paisesApp/pais/pages/por-region/por-region.component';
import { PorPaisComponent } from './03-paisesApp/pais/pages/por-pais/por-pais.component';
import { routesPaises } from "./03-paisesApp/paises-app.routing.module";

export const routes: Routes = [
    { path: '', component: MenuComponent, pathMatch: "full" },
    { path: 'bases', component: BasesComponent },
    { path: 'gifapp', component: GifAppComponent },
    // { path: 'paisesapp', component: PaisesAppComponent, outlet: "main-paises" } ,
    // { path: 'paisesapp/pais', component: PorPaisComponent, outlet: "main-paises" } ,
    // { path: 'paisesapp/region', component: PorRegionComponent, outlet: "main-paises" },
    // { path: 'paisesapp/capital', component: PorCapitalComponent, outlet: "main-paises" },
    // { path: 'paisesapp/pais/:id', component: VerPaisComponent, outlet: "main-paises" },
    { children: [{
        path: 'paisesapp',
        loadChildren: () => import('./03-paisesApp/paises-app.routing.module').then(m => m.PaisesRoutingModule),
        component: PaisesAppComponent,
        outlet: "outlet-paises"
      }]
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }