import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['../../../pipes-app.component.css']
})
export class BasicosComponent {

  nombreLower: string = "fernando";
  nombreUpper: string = "FERNANDO";
  nombreCompleto: string = "feRnAnDo hErrERa";

  fecha: Date = new Date(); // El día de hoy

  constructor() { }

}
