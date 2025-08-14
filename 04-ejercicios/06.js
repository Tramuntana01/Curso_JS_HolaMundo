/**
 * Crear algoritmo que devuelva cantidad
 * de números positivos de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
let positivos = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positivos++;
}
return {positivos};
}

let resultado = cuantosPositivos(array);
console.log(resultado);


/**
 * Como funciona el algoritmo

1.Inicialización del contador

let positivos = 0;


Empieza en 0 porque aún no hemos contado nada.

2.Recorrido del array

for (let i = 0; i < arr.length; i++)


Va desde la posición 0 hasta la última (arr.length - 1).

3.Condición

if (arr[i] > 0) positivos++;


Si el número en la posición i es mayor que 0 → es positivo.

Entonces incrementa el contador positivos en 1.

4.Devolver el resultado

return { positivos };


Devuelve un objeto con la cantidad total de números positivos.
 */