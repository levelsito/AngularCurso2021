import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-app',
  templateUrl: './pipes-app.component.html',
  styleUrls: ['./pipes-app.component.css']
})
export class PipesAppComponent {

  nombre: string = 'JoSé luIs caMpOs';
  valor: number = 1000;
  obj = {
    nombre: 'JosÉ LUis'
  }

  mostrarNombre() {
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );

  }

}
