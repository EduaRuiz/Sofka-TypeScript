import { CrearFigura } from "./CrearFiguras";

let creador = new CrearFigura();
let figura1 = creador.crear("a", 'Circulo', 8);
let figura2 = creador.crear("b", 'Cuadrado', 8);

figura1?.calcularArea();
figura1?.calcularPerimetro();

figura2?.calcularArea();
figura2?.calcularPerimetro();