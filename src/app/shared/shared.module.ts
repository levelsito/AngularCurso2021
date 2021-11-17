import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuPipesComponent } from './menu-pipes/menu-pipes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MenuPipesComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule
  ],
  exports: [
    SidebarComponent,
    MenuPipesComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
