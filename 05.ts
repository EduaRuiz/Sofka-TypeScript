interface FiguraGeometrica {
    //Métodos
    calcularArea(): void;
    calcularPerimetro(): void;
}

abstract class Figura implements FiguraGeometrica {
    //Propiedades
    protected nombre: string;

    //Métodos
    abstract calcularArea(): void;
    abstract calcularPerimetro(): void;

    //Constructor
    constructor(i: string) {
        this.nombre = i;
    }
}

class Circulo extends Figura {
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

class Cuadrado extends Figura {

    //Atributos
    lado: number;

    //Métodos
    calcularArea(): void {
        let area = this.lado * this.lado;
        console.log(`El área de ${this.nombre} es ${area}`);
    }

    calcularPerimetro(): void {
        let perimetro = this.lado * 4;
        console.log(`El perímetro de ${this.nombre} es ${perimetro}`);
    }

    //Constructor
    constructor(nombre: string, lado: number) {
        super(nombre);
        this.lado = lado;
    }
}

class CrearFigura {
    
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

let creador = new CrearFigura();
let figura1 = creador.crear("a", 'Circulo', 8);
let figura2 = creador.crear("b", 'Cuadrado', 8);

figura1?.calcularArea();
figura1?.calcularPerimetro();

figura2?.calcularArea();
figura2?.calcularPerimetro();
