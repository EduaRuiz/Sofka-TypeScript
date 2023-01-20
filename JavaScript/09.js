var imprimirArbol = function (n) {
    var espacios = "";
    for (var i = 0; i < n; i++) {
        espacios = "";
        var estrellas = "";
        for (var j = 0; j < (n - i - 1); j++) {
            espacios = espacios + " ";
        }
        for (var j = 0; j < (i * 2 + 1); j++) {
            estrellas = estrellas + "*";
        }
        console.log(espacios + estrellas);
    }
    var base = "***";
    for (var j = 0; j < (n - 2); j++) {
        espacios = espacios + " ";
    }
    console.log(espacios + base);
};
imprimirArbol(20);
