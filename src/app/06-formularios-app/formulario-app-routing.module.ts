import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Mis Imports
import { AuthModule } from './auth/auth.module';
import { FormulariosAppComponent } from './formularios-app.component';
import { ReactiveModule } from './reactive/reactive.module';
import { TemplateModule } from './template/template.module';

export const routesFormulariosApp: Routes = [
  {
    path: '' ,
    component: FormulariosAppComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import( './auth/auth.module' ).then( m => AuthModule )
      },
      {
        path: 'reactive',
        loadChildren: () => import( './reactive/reactive.module' ).then( m => ReactiveModule )
      },
      {
        path: 'template',
        loadChildren: () => import( './template/template.module' ).then( m => TemplateModule )
      },
      {
        path: '**', redirectTo: 'template'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesFormulariosApp)],
  exports: [RouterModule]
})
export class FormulariosAppRoutingModule {}
