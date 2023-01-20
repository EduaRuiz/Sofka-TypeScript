let imprimirArbol = (n: number) => {
    let espacios = "";
    for (let i = 0; i < n; i++) {
        espacios = "";
        let estrellas = "";
        for (let j = 0; j < (n - i - 1); j++) {
            espacios = espacios + " ";
        }
        for (let j = 0; j < (i * 2 + 1); j++) {
            estrellas = estrellas + "*";
        }
        console.log(espacios + estrellas);
    }
    let base = "***"
    for (let j = 0; j < (n - 2); j++) {
        espacios = espacios + " ";
    }
    console.log(espacios + base);
}

imprimirArbol(20);