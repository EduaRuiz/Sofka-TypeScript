"use strict";
//Class
exports.__esModule = true;
exports.CrearFigura = void 0;
var Circulo_1 = require("./Circulo");
var Cuadrado_1 = require("./Cuadrado");
var CrearFigura = /** @class */ (function () {
    function CrearFigura() {
    }
    //Métodos
    CrearFigura.prototype.crear = function (nombre, tipo, valor) {
        if (tipo == 'Circulo') {
            return new Circulo_1.Circulo(nombre, valor);
        }
        else if (tipo == 'Cuadrado') {
            return new Cuadrado_1.Cuadrado(nombre, valor);
        }
        else {
            console.log('No es un tipo de figura');
        }
    };
    return CrearFigura;
}());
exports.CrearFigura = CrearFigura;
