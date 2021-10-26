import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template: `

        <h1>{{ titulo }}</h1>

        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular(-base);">- {{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(+base);">+ {{ base }}</button>
    
    `,
    styles: [`
        button {
        background-color: black;
        border-radius: 5px;
        border: 0px;
        color: white;
        cursor: pointer;
        margin-right: 5px;
        margin-left: 5px;
        padding: 5px 10px;
        }
    `]
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;

    base: number = 5;

    acumular( valor: number ) {
    this.numero += valor;
    }
}