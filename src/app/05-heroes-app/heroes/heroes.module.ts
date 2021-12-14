import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesRouting } from './heroes-routing.module';
import { HeroesTarjetaComponent } from './components/heroes-tarjeta/heroes-tarjeta.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ListadoComponent } from './pages/listado/listado.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HeroesTarjetaComponent,
    HomeComponent,
    ImagenPipe,
    ListadoComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HeroesRouting,
    HttpClientModule,
    MaterialModule
  ]
})
export class HeroesModule { }
