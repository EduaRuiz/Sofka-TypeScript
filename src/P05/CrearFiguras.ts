//Class

import { Circulo } from "./Circulo";
import { Cuadrado } from "./Cuadrado";

export class CrearFiguras {

    //Métodos
    crear(nombre: string, tipo: 'Circulo' | 'Cuadrado', valor: number) {

        if (tipo == 'Circulo') {
            return new Circulo(nombre, valor);
        } else if (tipo == 'Cuadrado') {
            return new Cuadrado(nombre, valor);
        } else {
            console.log('No es un tipo de figura');
        }
    }
}