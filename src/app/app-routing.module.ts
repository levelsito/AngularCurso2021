import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BasesModule } from './01-bases/bases.module';
import { GifsPageComponent } from './02-gifApp - app/gifs/gifs-page/gifs-page.component';

const routes: Routes = [
    { path: 'bases', component: BasesModule },
    { path: 'gifApps', component: GifsPageComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }