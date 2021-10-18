import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

//Mis Imports
import { BasesComponent } from './01-bases/bases.component';
import { GifAppComponent } from './02-gifApp/gifApp.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    { path: '', component: MenuComponent},
    { path: 'bases', component: BasesComponent},
    { path: 'gifapp', component: GifAppComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }