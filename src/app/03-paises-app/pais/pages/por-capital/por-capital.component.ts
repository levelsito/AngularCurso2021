import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  capitalesSugeridas: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private PaisService: PaisService) { }

  buscar( termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarCapital(this.termino)
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
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.PaisService.buscarCapital( termino ).subscribe( 
      capitales => this.capitalesSugeridas = capitales.splice(0,5),
      (err) => this.capitalesSugeridas = []
    );
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }

}
