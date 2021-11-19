import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { GifAppComponent } from './02-gifApp/gifApp.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

export const routes: Routes = [
    { path: '', component: MainMenuComponent, pathMatch: "full" },
    { path: 'bases',
      children: [{
        path: '',
        loadChildren: () => import('./01-bases/bases.module').then (m => m.BasesModule)
      }]
    },
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
    },
    {
      path: 'heroesapp',
      children: [{
        path: '',
        loadChildren: () => import('./05-heroes-app/heroes-app.module').then(m => m.HeroesAppModule),
       }]
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
