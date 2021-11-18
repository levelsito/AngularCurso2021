import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { HeroesAppComponent } from './heroes-app.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';

export const routesHeroesApp: Routes = [
    { path: '', component: HeroesAppComponent },
    { path: '404', component: ErrorPageComponent },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then ( m => m.AuthModule )
    },
    {
      path: 'heroes',
      loadChildren: () => import('./heroes/heroes.module').then ( m => m.HeroesModule )
    },
    { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [RouterModule.forChild(routesHeroesApp)],
  exports: [RouterModule]
})
export class HeroesAppRoutingModule {}
