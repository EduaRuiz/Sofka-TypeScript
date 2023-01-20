//Class

import { Figura } from "./Figura";

export class Circulo extends Figura {

    //Atributos
    radio: number;

    //Métodos
    calcularArea(): void {
        let area = Math.PI * (this.radio * this.radio);
        console.log(`El área de ${this.nombre} es ${area}`);
    }

    calcularPerimetro(): void {
        let perimetro = 2 * Math.PI * this.radio;
        console.log(`El perímetro de ${this.nombre} es ${perimetro}`);
    }

    //Constructor
    constructor(nombre: string, radio: number) {
        super(nombre);
        this.radio = radio;
    }
}