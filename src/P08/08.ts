let crearPalindromoFor = (cadena: string) => {
    let inverso = "";
    for (let i of cadena) {
        inverso = i + inverso;
    }
    return cadena + inverso;
}

console.log(crearPalindromoFor("panela y limon"));