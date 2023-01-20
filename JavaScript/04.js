var promedio = function (lista) {
    var total = 0;
    lista.forEach(function (element) {
        total = total + element;
    });
    return total / lista.length;
};
console.log(promedio([0, 8, 4, 7, 3, 9, 11, 5, 4, 2]));
var compararPromedio = function (promed, numero) {
    if (promed > numero) {
        return 'El promedio es mayor al numero comparado';
    }
    return 'El promedio es menor al numero comparado';
};
console.log(compararPromedio(6, 50));
var promedioMayorMenor = function (lista, comparador) {
    return compararPromedio(promedio(lista), comparador);
};
console.log(promedioMayorMenor([0, 8, 4, 7, 3, 9, 11, 5, 4, 2], 3));
