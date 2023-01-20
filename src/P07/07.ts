let crearPalindromo = (cadena: string) => {
    return cadena + cadena.split("").reverse().join("");
}

console.log(crearPalindromo("panela y limon"));