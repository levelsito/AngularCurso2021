import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { GifAppComponent } from './gif-app.component';

export const routesGif: Routes = [
  { path: '', component: GifAppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routesGif)],
  exports: [RouterModule]
})

export class GifRoutingModule { }
