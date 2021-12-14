import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { BasesComponent } from './bases.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { ListadoComponent } from './heroes/listado/listado.component';

export const routesBases: Routes = [
    { path: '', component: BasesComponent, pathMatch: "full" },
    { path: 'contador', component: ContadorComponent },
    { path: 'dbz', component: MainPageComponent },
    { path: 'heroes', component: ListadoComponent },
    { path: '**', redirectTo: ''} 
];

@NgModule({
  imports: [RouterModule.forChild(routesBases)],
  exports: [RouterModule]
})
export class BasesRoutingModule { }
