let obtenerMayor = (lista: any) => {
    let pivote = 0
    lista.forEach((element: number) => {
        if (element > pivote) pivote = element;
    });
    return pivote;
}

console.log(obtenerMayor([0, 8, 4, 7, 3, 9, 11, 5, 4, 2]));