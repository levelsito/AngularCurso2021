import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ ` button {
    margin-right: 5px;
  }`
  ]
})
export class PorRegionComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor(private PaisService: PaisService) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {

    if( region === this.regionActiva ) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.PaisService.buscarRegion( this.regionActiva )
      .subscribe( (paises) => {this.paises = paises});
  }

}