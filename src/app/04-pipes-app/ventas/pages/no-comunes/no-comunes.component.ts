import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['../../../pipes-app.component.css']
})
export class NoComunesComponent implements OnInit {

  fecha: Date = new Date(); // El día de hoy

  //i18nSelect
  nombre1: string = 'Irma';
  genero1: string = 'femenino';
  nombre2: string = 'José Luis';
  genero2: string = 'masculino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes: string[] = [
    'María',
    'Juan',
    'Esteban',
    'José',
    'Fernando',
    'Irma'
  ];
  clientesMapa = {
    '=0':'no tenemos clientes esperando.',
    '=1':'tenemos 1 cliente esperando.',
    'other':'tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona() {
    if ( this.nombre1 === 'Marcos') {
      this.nombre1 = 'Irma';
      this.genero1 = 'femenino';
      this.nombre2 = 'José Luis';
      this.genero1 = 'masculino';
    }
    else {
      this.nombre1 = 'Marcos';
      this.genero1 = 'masculino';
      this.nombre2 = 'Isabel';
      this.genero2 = 'femenino';
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'José Luis',
    edad: this.fecha.getFullYear()-1992,
    direccion: 'Málaga, España'
  }

  //JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      puedeVolar: true,
    },
    {
      nombre: 'Robin',
      puedeVolar: false,
    },
    {
      nombre: 'Aquaman',
      puedeVolar: false,
    }
  ]

  //Async Pipe
  miObservable = interval(2000); //0,1,2,3,4,...

  valorPromesa = new Promise( ( resolve ) => {
      setTimeout(() => {
        resolve( 'Tenemos datos de la promesa' );
      }, 3500)
    }
  );
}
