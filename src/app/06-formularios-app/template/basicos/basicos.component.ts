import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initialForm = {
    nombreProducto: '',
    precioProducto: 0,
    stockProducto: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log( 'Posteo correcto');
    this.miFormulario.resetForm({
      precioProducto: 0,
      stockProducto: 0
    });
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.nombreProducto?.invalid &&
      this.miFormulario?.controls.nombreProducto?.touched
  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precioProducto?.value < 0 &&
      this.miFormulario?.controls.precioProducto?.touched
  }
}
