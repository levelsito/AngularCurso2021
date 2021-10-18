import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../gifApp.component.css']
})
export class SidebarComponent {

  get historial() {
    let historial = this.gifsService.historial.splice(0,10);
    return historial;
  }

  constructor( private gifsService: GifsService) { }

  buscar( termino: string ) {
    this.gifsService.buscarGifs( termino );
  }

}
