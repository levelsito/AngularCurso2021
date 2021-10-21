import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: [ './por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService: PaisService) { }

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
        console.info("Error " + err.status);
      });
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    // TODO: Crear sugerencias
  }

}
