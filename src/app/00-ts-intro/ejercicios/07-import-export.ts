/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: "Teléfono 2",
        precio: 150
    }
];

const [ total, isv ] =  calculaISV( carritoCompras );

console.log( "Total", total );
console.log( "ISV", isv );