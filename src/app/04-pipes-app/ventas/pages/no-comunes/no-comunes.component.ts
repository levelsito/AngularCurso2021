import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['../../../pipes-app.component.css']
})
export class NoComunesComponent implements OnInit {

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
    'Maria',
    'Juan',
    'Esteban'
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
    this.nombre1 = 'Marcos';
    this.genero1 = 'masculino';
    this.nombre2 = 'Isabel';
    this.genero2 = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

}
