import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectoresComponent } from './selectores.component';
import { SelectorPageComponent } from './paises/pages/selector-page/selector-page.component';
import { PaisesModule } from './paises/paises.module';

const routes: Routes = [
  { path: '', component: SelectoresComponent,
    children: [
      { path: 'selector',
        loadChildren: () => import( './paises/paises.module' ).then( m => PaisesModule )
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectoresRoutingModule { }
