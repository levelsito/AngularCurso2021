import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {

  componentes: string[] = [
    'bases',
    'gifApp',
    'paisesApp',
    'pipesApp',
    'heroesApp',
    'formulariosApp',
    'selectores'
  ]

}
