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
exports.Circulo = void 0;
var Figura_1 = require("./Figura");
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    //Constructor
    function Circulo(nombre, radio) {
        var _this = _super.call(this, nombre) || this;
        _this.radio = radio;
        return _this;
    }
    //Métodos
    Circulo.prototype.calcularArea = function () {
        var area = Math.PI * (this.radio * this.radio);
        console.log("El \u00E1rea de ".concat(this.nombre, " es ").concat(area));
    };
    Circulo.prototype.calcularPerimetro = function () {
        var perimetro = 2 * Math.PI * this.radio;
        console.log("El per\u00EDmetro de ".concat(this.nombre, " es ").concat(perimetro));
    };
    return Circulo;
}(Figura_1.Figura));
exports.Circulo = Circulo;
