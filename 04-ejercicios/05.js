/**
 * Crear algoritmo que devuelva el número
 * menor y mayor de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
let menor = arr[0];
let mayor = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) menor = arr[i];
    if (arr[i] > mayor) mayor = arr[i];
}
return {menor,mayor};
}

let numeros = getMenorMayor(array)
console.log(numeros);


/**
 * Cómo funciona la función paso a paso:

1.Inicialización de variables

Definimos menor y mayor tomando el valor en la posición 0 del array (arr[0]).

Esto nos da un punto de partida real del que comparar el resto de elementos.

2.Recorrido del array

Con un bucle for, comenzamos en i = 1 (posición 1 del array) porque la posición 0 ya fue usada en la inicialización.

Mientras i sea menor que la longitud total del array, seguimos avanzando (i++).

3.Comparaciones dentro del bucle

if (arr[i] < menor) menor = arr[i];

Si el valor en la posición i es menor que el valor guardado en menor, actualizamos menor con ese valor.

if (arr[i] > mayor) mayor = arr[i];

Si el valor en la posición i es mayor que el valor guardado en mayor, actualizamos mayor con ese valor.

4.Devolución del resultado

Después de recorrer todo el array, usamos return para devolver ambos valores juntos (puede ser un array [menor, mayor] o un objeto { menor, mayor }).
 */