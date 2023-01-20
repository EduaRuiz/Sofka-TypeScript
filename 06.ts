let esPalindromo = (cadena: string) => {
    return cadena.split("").reverse().join("") === cadena;
}

let esPalindromo1 = (cadena: string) => {
    let inverso = "";
    for (let i = cadena.length; i > 0; i--) {
        inverso += cadena[i - 1];
    }
    return inverso === cadena;
}


console.log(esPalindromo("poopp"))
console.log(esPalindromo1("poopp"))