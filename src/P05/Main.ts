
import { CrearFiguras } from "./CrearFiguras";

let creadorDeFiguras = new CrearFiguras();
let figura1 = creadorDeFiguras.crear("a", 'Circulo', 8);
let figura2 = creadorDeFiguras.crear("b", 'Cuadrado', 8);

figura1?.calcularArea();
figura1?.calcularPerimetro();

figura2?.calcularArea();
figura2?.calcularPerimetro();