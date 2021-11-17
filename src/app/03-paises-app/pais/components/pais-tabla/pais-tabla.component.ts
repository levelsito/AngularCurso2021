import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['../../../paises-app.component.css']
})
export class PaisTablaComponent {

  constructor() { }

  @Input() paises: Country[] = [];

}
