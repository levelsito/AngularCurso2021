import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulariosAppComponent } from './06-formularios-app/formularios-app.component';

//Mis Imports
import { MainMenuComponent } from './main-menu/main-menu.component';

export const routes: Routes = [
    { path: '', component: MainMenuComponent, pathMatch: "full" },
    { path: 'bases',
      children: [{
        path: '',
        loadChildren: () => import('./01-bases/bases.module').then (m => m.BasesModule)
      }]
    },
    { path: 'gifapp',
      children: [{
        path: '',
        loadChildren: () => import('./02-gif-app/gif-app.module').then(m => m.GifAppModule),
      }]
    },
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
    },
    {
      path: 'heroesapp',
      children: [{
        path: '',
        loadChildren: () => import('./05-heroes-app/heroes-app.module').then(m => m.HeroesAppModule),
       }]
    },
    {
      path: 'formulariosapp',
      children: [{
        path: '',
        loadChildren: () => import('./06-formularios-app/formularios-app.module').then(m => m.FormulariosAppModule),
      }]
    },
    {
      path: 'selectores',
      children: [{
        path: '',
        loadChildren: () => import('./07-selectores/selectores.module').then(m => m.SelectoresModule),
      }]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
