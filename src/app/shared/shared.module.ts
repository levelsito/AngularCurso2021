import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuPipesComponent } from './menu-pipes/menu-pipes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MenuPipesComponent,
    ErrorPageComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule
  ],
  exports: [
    SidebarComponent,
    MenuPipesComponent,
    ErrorPageComponent,
    SidemenuComponent
  ]
})
export class SharedModule { }
