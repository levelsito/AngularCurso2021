import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

export const routesHeroesApp: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then ( m => m.AuthModule )
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then ( m => m.HeroesModule ),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [RouterModule.forChild(routesHeroesApp)],
  exports: [RouterModule]
})
export class HeroesAppRoutingModule {}
