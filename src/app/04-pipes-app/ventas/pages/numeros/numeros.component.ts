import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['../../../pipes-app.component.css']
})
export class NumerosComponent {

  ventasNetas: number = 21213123123.5577;
  porcentaje: number = 0.4856;

}
