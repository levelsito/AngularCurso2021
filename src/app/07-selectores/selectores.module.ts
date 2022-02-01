import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectoresComponent } from './selectores.component';
import { SelectoresRoutingModule } from './selectores-routing.module';



@NgModule({
  declarations: [
    SelectoresComponent
  ],
  imports: [
    CommonModule,
    SelectoresRoutingModule,
  ],
  exports: [
    SelectoresComponent
  ]
})
export class SelectoresModule { }
