import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectoresComponent } from './selectores.component';
import { SelectoresRoutingModule } from './selectores-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SelectoresComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SelectoresRoutingModule,
  ],
  exports: [
    SelectoresComponent
  ]
})
export class SelectoresModule { }
