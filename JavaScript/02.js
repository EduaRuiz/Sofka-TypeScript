var potencia = function (base, exponente) {
    var respuesta = base;
    for (var i = 1; i < exponente; i++) {
        respuesta = respuesta * base;
    }
    return respuesta;
};
console.log(potencia(2, 2));
