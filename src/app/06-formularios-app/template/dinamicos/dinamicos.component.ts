import { Component, OnInit, ViewChild } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'José',
    favoritos: [
      { id: 1, nombre: 'Cyberpunk 2077'},
      { id: 2, nombre: 'DayZ'},
    ]
  }

  guardar(){
    console.log('Formulario posteado');
  }

  eliminar(id: number){
    console.log("Eliminado elemento con id: ", id);
    this.persona.favoritos.splice(id, 1);
  }

  agregar() {
    const nuevoJuego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push( {...nuevoJuego} );
    this.nuevoJuego = '';
  }
}
