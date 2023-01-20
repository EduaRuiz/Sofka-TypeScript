var crearPalindromo = function (cadena) {
    return cadena + cadena.split("").reverse().join("");
};
console.log(crearPalindromo("panela y limon"));
