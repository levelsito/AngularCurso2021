import { Component } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html'
})
export class BasesComponent {
  componentes: string[] = [
    'contador',
    'DBZ',
    'heroes'
  ]
}

