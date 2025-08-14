/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */

function getbyIdx(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return ;
  }

  return arr[idx];
}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);

/**
 * Cómo funciona la función getbyIdx

1.Parámetros de entrada

arr: el array del que quieres obtener un elemento.

idx: el índice (posición) del elemento que quieres.

2.Validación del índice

if (idx < 0 || arr.length <= idx)

Comprueba si idx es negativo (idx < 0) o si es mayor o igual a la longitud del array (arr.length <= idx).

Si cualquiera de esas condiciones es verdadera, significa que el índice está fuera de los límites del array.

En ese caso, hace return; sin valor, lo que provoca que la función devuelva undefined.

3.Devolver el elemento

Si el índice es válido, la función pasa al siguiente return arr[idx];.

Esto devuelve el elemento que está en la posición idx del array.

4.Ejemplo de uso

getbyIdx([1, 2], 1)

El índice 1 es válido (no es negativo y es menor que 2, la longitud del array).

Devuelve el elemento en posición 1 → 2.

console.log(resultado); muestra 2.
 */