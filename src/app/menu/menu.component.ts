import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  componentes: string[] = [
    'bases',
    'gifApp',
    'paisesApp',
    'pipesApp'
  ]

}
