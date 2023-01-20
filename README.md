# Sofka-TypeScript
Reto de nivelación semana 0 para SofkaU

NOTA: Los ejercicios se deben entregar en un repositorio de Github (un repositorio para
todos los ejercicios)

1. Área de un círculo
Crear una función que calcule el área de un círculo dado su radio. Utiliza la fórmula: A = π * r^2.
2. Potencia
Crear una función que calcule el resultado de elevar un número dado a una potencia dada.Utiliza la fórmula: base^exponente
3. Obtener el número mayor
    3.1. Redacte una función llamada 'obtenerMayor' que acepte una cantidad variable de argumentos y devuelva el valor máximo entre ellos. Utilice el operador spread (...) para recibir los argumentos en un arreglo.
    3.2. La función debe devolver el valor de la variable “mayor” al final del ciclo de iteración.
    3.3. Invoque la función “obtenerMayor” pasando distintos conjuntos de números como argumentos y verifique los resultados en la consola utilizando una sentencia “console.log”.
4. Cálculo de promedio y comparación
    4.1. Codifique una función llamada “promedio” que calcule el promedio de una cantidad variable de argumentos utilizando el operador de propagación (...). La función debe devolver el resultado como un número.
    4.2. Codifique una función llamada “compararPromedio” que reciba un número (elpromedio) y otro número a comparar. Utilice una estructura de control de flujo paradeterminar si el promedio es mayor o menor al número dado y devuelva el resultado enforma de cadena de texto (“mayor” o “menor”).
    4.3. Codifique una función llamada “promedioMayorMenor” que combine las funciones anteriores, reciba un número a comparar y una cantidad variable de argumentos. Utilice el operador spread para pasar los argumentos a la función “promedio”. Luego, utilice el resultado de la función “promedio” y el número a comparar como argumentos para la función “compararPromedio” y devuelva el resultado en una cadena de texto.
    4.4. Invoque la función “promedioMayorMenor” pasando distintos conjuntos de números y un número a comparar como argumentos, y verifique los resultados en la consola utilizando una sentencia “console.log”.
5. Ejercicio de POO
    5.1. Crear una interfaz llamada “FiguraGeometrica” que contenga dos métodos sin valor de retorno llamados “calcularArea” y “calcularPerimetro”.
    5.2. Codifique una clase abstracta denominada “Figura” que implemente la interfaz “FiguraGeometrica”; lo anterior debe contener dos métodos abstractos "calcularArea" y "calcularPerimetro", los cuales, no tienen valor de retorno. Además, incluya una propiedad protegida "nombre" y un constructor que reciba un parámetro y lo asigne a dicha propiedad.
    5.3. Crear una clase llamada "Circulo" que extienda de la clase "Figura", esta debe tener una propiedad "radio" y un constructor que reciba dos parámetros "nombre" y "radio". Los debe asignar a las propiedades correspondientes de la clase. Implementa los métodos "calcularArea" y "calcularPerimetro" de la interfaz "FiguraGeometrica" utilizando las fórmulas para calcular el área y perímetro de un círculo.
    5.4. Codificar una clase llamada "Cuadrado" que extienda de la clase "Figura", con una propiedad "lado" y un constructor que reciba dos parámetros "nombre" y "lado". Estos deben ser asignados a las propiedades correspondientes de la clase. Implementa los métodos "calcularArea" y "calcularPerimetro" de la interfaz "FiguraGeometrica" utilizando las fórmulas para calcular el área y perímetro de un cuadrado.
    5.5. Crear una clase "CrearFiguras" que tenga un método "crear", este debe recibir tres parámetros "nombre", "tipo" y "valor". Devolver un objeto de la clase "Circulo" o "Cuadrado" según el valor del parámetro "tipo".
    5.6. En un archivo principal, crea un objeto de la clase "CrearFiguras" y utilizarlo para crear dos objetos, uno de tipo "Circulo" y otro de tipo "Cuadrado". Utiliza los objetos para imprimir el área y perímetro de cada figura utilizando los métodos de la interfaz "FiguraGeometrica".
6. Saber sí es un palíndromo.
    6.1. Crear una función llamada "esPalindromo" que reciba una cadena como argumento.
    6.2. Sí las cadenas son iguales, la función debe devolver "true" indicando que la cadena es un palíndromo. Sí las cadenas son diferentes, la función debe devolver "false" indicando que la cadena no es un palíndromo.
    6.3. Llamar a la función "esPalindromo" pasando diferentes palabras y frases como argumentos y comprueba los resultados.
7. Crear un palíndromo usando los métodos de los strings
    7.1. Crear una función llamada "crearPalindromo" que reciba una cadena de texto como argumento.
    7.2. La función debe devolver la cadena resultante, que es un palíndromo.
    7.3. Llamar la función "crearPalindromo" pasando diferentes palabras como argumentos y comprueba los resultados.
8. Crear un Palíndromo sin usar los métodos de los strings
    8.1. Crear una función llamada "crearPalindromo" que reciba una cadena como argumento.
    8.2. La función debe devolver un arreglo con el resultado, ejemplo, sí se pasa la palabra “HOLA” el resultado deberá ser: [H,O,L,A,L,O,H].
    8.3. Llamar a la función "crearPalindromo" pasando diferentes palabras como argumentos y comprueba los resultados.
9. Imprimir un árbol de navidad con asteriscos ( * )
    9.1. Crear una función llamada "imprimirArbol" que reciba un número entero "n" como argumento, representando la altura del árbol.
    9.2. Utilizar un ciclo “for” para generar cada línea del árbol.
    9.3. En cada iteración del ciclo “for”, debe crear dos variables: "espacios" y "estrellas".
    9.4. Utilizar un ciclo “for” dentro de la iteración del ciclo principal para generar una cadena con "n - i - 1" espacios en blanco para la variable "espacios".
    9.5. Utilizar otro ciclo “for” dentro de la iteración del ciclo principal para generar una cadena con "i * 2 + 1" estrellas para la variable "estrellas".
    9.6. Imprimir las variables "espacios" y "estrellas" juntas y suma espacios para formar un árbol.
    9.7. Al final del ciclo principal, crea una variable "base" vacía y utiliza otro ciclo “for” para generar "n - 2" espacios en blanco.
    9.8. Agrega "***" a la variable "base" e imprime la variable "base" como la base del árbol.