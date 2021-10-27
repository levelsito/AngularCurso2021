import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { BasesComponent } from './01-bases/bases.component';
import { GifAppComponent } from './02-gifApp/gifApp.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: '', component: MenuComponent, pathMatch: "full" },
    { path: 'bases', component: BasesComponent },
    { path: 'gifapp', component: GifAppComponent },
    {
      path: 'paisesapp',
      children: [{
        path: '',
        loadChildren: () => import('./03-paises-app/paises-app.module').then(m => m.PaisesAppModule),
       }]
    },
    {
      path: 'pipesapp',
      children: [{
        path: '',
        loadChildren: () => import('./04-pipes-app/pipes-app.module').then(m => m.PipesAppModule),
       }]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
