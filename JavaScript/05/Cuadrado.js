"use strict";
//Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cuadrado = void 0;
var Figura_1 = require("./Figura");
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    //Constructor
    function Cuadrado(nombre, lado) {
        var _this = _super.call(this, nombre) || this;
        _this.lado = lado;
        return _this;
    }
    //Métodos
    Cuadrado.prototype.calcularArea = function () {
        var area = this.lado * this.lado;
        console.log("El \u00E1rea de ".concat(this.nombre, " es ").concat(area));
        throw new Error("Method not implemented.");
    };
    Cuadrado.prototype.calcularPerimetro = function () {
        var perimetro = this.lado * 4;
        console.log("El per\u00EDmetro de ".concat(this.nombre, " es ").concat(perimetro));
        throw new Error("Method not implemented.");
    };
    return Cuadrado;
}(Figura_1.Figura));
exports.Cuadrado = Cuadrado;
var a = new Cuadrado("Circulo", 5);
