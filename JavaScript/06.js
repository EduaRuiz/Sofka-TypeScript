var esPalindromo = function (cadena) {
    return cadena.split("").reverse().join("") === cadena;
};
var esPalindromo1 = function (cadena) {
    var inverso = "";
    for (var i = cadena.length; i > 0; i--) {
        inverso += cadena[i - 1];
    }
    return inverso === cadena;
};
console.log(esPalindromo("poopp"));
console.log(esPalindromo1("poopp"));
