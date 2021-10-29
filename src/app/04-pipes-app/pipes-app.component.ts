import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-pipes-app',
  templateUrl: './pipes-app.component.html',
  styleUrls: ['./pipes-app.component.css']
})
export class PipesAppComponent implements OnInit {

  nombre: string = 'JoSé luIs caMpOs';
  valor: number = 1000;
  obj = {
    nombre: 'JosÉ LUis'
  }

  constructor( private primeNgConfig:PrimeNGConfig ){}

  ngOnInit() {
    this.primeNgConfig.ripple = true;
  }

  mostrarNombre() {
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );

  }

}
