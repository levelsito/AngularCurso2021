import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuPipesComponent } from './menu-pipes/menu-pipes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    SidebarComponent,
    MenuPipesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule
  ],
  exports: [
    SidebarComponent,
    MenuPipesComponent
  ]
})
export class SharedModule { }
