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
var Figura = /** @class */ (function () {
    //Constructor
    function Figura(i) {
        this.nombre = i;
    }
    return Figura;
}());
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
}(Figura));
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
    };
    Cuadrado.prototype.calcularPerimetro = function () {
        var perimetro = this.lado * 4;
        console.log("El per\u00EDmetro de ".concat(this.nombre, " es ").concat(perimetro));
    };
    return Cuadrado;
}(Figura));
var CrearFigura = /** @class */ (function () {
    function CrearFigura() {
    }
    //Métodos
    CrearFigura.prototype.crear = function (nombre, tipo, valor) {
        if (tipo == 'Circulo') {
            return new Circulo(nombre, valor);
        }
        else if (tipo == 'Cuadrado') {
            return new Cuadrado(nombre, valor);
        }
        else {
            console.log('No es un tipo de figura');
        }
    };
    return CrearFigura;
}());
var creador = new CrearFigura();
var figura1 = creador.crear("a", 'Circulo', 8);
var figura2 = creador.crear("b", 'Cuadrado', 8);
figura1 === null || figura1 === void 0 ? void 0 : figura1.calcularArea();
figura1 === null || figura1 === void 0 ? void 0 : figura1.calcularPerimetro();
figura2 === null || figura2 === void 0 ? void 0 : figura2.calcularArea();
figura2 === null || figura2 === void 0 ? void 0 : figura2.calcularPerimetro();
