let promedio = (...lista: Array<number>) => {
    let total = 0;
    lista.forEach((element: number) => {
        total = total + element;
    });
    return total / lista.length;
}

console.log(promedio(0, 8, 4, 7, 3, 9, 11, 5, 4, 2, 4, 5, 6));

let compararPromedio = (promed: number, numero: number) => {
    if (promed > numero) {
        return `El promedio es mayor al numero comparado. (${promed} > ${numero})`;
    } else {
        return `El promedio es menor al numero comparado. (${promed} < ${numero})`
    }
}

console.log(compararPromedio(6, 50));

let promedioMayorMenor = (comparador: number, ...lista: Array<number>) => {
    return compararPromedio(promedio(...lista), comparador);
}

console.log(promedioMayorMenor(3, 0, 8, 4, 7, 3, 9, 11, 5, 4, 2));