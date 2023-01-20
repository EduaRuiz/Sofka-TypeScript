let potencia = (base: number, exponente: number) => {
    let respuesta = base;
    for (let i = 1; i < exponente; i++) {
        respuesta = respuesta * base;
    }
    return respuesta;
}

console.log(potencia(2, 2));