// function cualEsMayor(a, b) {
//     return (a > b) ? a : b;               asi sería con un metodo ternario, mas limpio
// }
// let mayor = cualEsMayor(10, 5);

// console.log(mayor);

function cualEsMayor(a, b) {            // asi seria con un bucle if
    if (a > b) {
        return a; 
     } else {
                return b;
            }
        }
let mayor = cualEsMayor(10, 5);

console.log(mayor);

/**
 * Cómo funciona la función cualEsMayor

1.Parámetros de entrada

La función recibe dos valores: a y b.

Estos valores pueden ser números o cualquier otro tipo que sea comparable con el operador >.

2.Condicional if

Se evalúa la expresión a > b.

Si es verdadera (es decir, a es mayor que b), se ejecuta el bloque inmediatamente después del if y se devuelve a usando return a;.

3.Bloque else

Si la condición a > b es falsa (lo que significa que a es igual o menor que b), se ejecuta el bloque else y se devuelve b usando return b;.

4.Almacenamiento del resultado

Cuando llamamos a cualEsMayor(10, 5), la función compara 10 > 5.

Como es verdadero, devuelve 10, y este valor se almacena en la variable mayor.

5.Salida en consola

console.log(mayor); muestra el valor devuelto (en este caso, 10) en la consola.
 */