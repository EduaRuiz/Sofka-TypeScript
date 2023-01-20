var obtenerMayor = function (lista) {
    var pivote = 0;
    lista.forEach(function (element) {
        if (element > pivote)
            pivote = element;
    });
    return pivote;
};
console.log(obtenerMayor([0, 8, 4, 7, 3, 9, 11, 5, 4, 2]));
