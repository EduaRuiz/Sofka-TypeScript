let crearPalindromoString = (cadena: string) => {
    return cadena + cadena.split("").reverse().join("");
}

console.log(crearPalindromoString("panela y limon"));