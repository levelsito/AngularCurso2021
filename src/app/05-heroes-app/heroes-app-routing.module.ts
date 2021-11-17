import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { HeroesAppComponent } from './heroes-app.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';

export const routesHeroes: Routes = [
    { path: '', component: HeroesAppComponent },
    { path: '404', component: ErrorPageComponent },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then ( m => m.AuthModule )
    },
    { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [RouterModule.forChild(routesHeroes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
