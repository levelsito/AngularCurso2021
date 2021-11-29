import { Component, Input } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styleUrls: ['../../../heroes-app.component.css']
})
export class HeroesTarjetaComponent {

  constructor() { }

  @Input() heroe!: Heroe;

}
