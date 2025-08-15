/** Crear algoritmo que tome un array
 * de objetos y devuelva un array de pares
 */

let array = [{
    id: 1,
    name: "Nicolas",
}, {
    id: 2,
    name: "Felipe" ,
}, {
    id: 3,
    name: "Julian",
}];

let pares = [
    [1, { id: 1, name: "Nicolas"} ],
    [2, { id: 2, name: "Felipe"} ],
    [3, { id: 3, name: "Julian"} ],
];

function toPairs(arr) {                                             // "funcion hecha con for..in"
    let pairs = [];                                                 //let pairs = []
    for (let elemento of arr){                                      // for (idx in arr) {
        let par = [elemento.id, elemento];                          //  let elemento = arr[idx];
        pairs.push(par);                                            //  pairs[idx] = [elemento.id, elemento];
                                                                    // }
    }                                                               // return pairs;
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);

/**
 * Cómo funciona la función toPairs

1. Parámetros de entrada

arr: un array que contiene objetos.

Cada objeto tiene al menos una propiedad id y otras propiedades (por ejemplo name).

2. Crear el array acumulador

let pairs = []; inicializa un array vacío donde se irán guardando los pares [id, objeto] generados.

3. Recorrer el array original

for (let elemento of arr) recorre cada objeto del array arr directamente (sin usar índices).

En la primera vuelta, elemento es el primer objeto, en la segunda el segundo, y así sucesivamente.

4. Crear un par para cada elemento

let par = [elemento.id, elemento]; crea un array con dos posiciones:

Primera posición → el valor de la propiedad id del objeto (elemento.id).

Segunda posición → el objeto completo (elemento).

Ejemplo: si elemento = { id: 1, name: "Nicolas" }, entonces par = [1, { id: 1, name: "Nicolas" }].

5. Guardar el par en el acumulador

pairs.push(par); añade el par recién creado al final del array pairs.

Tras varias vueltas, pairs se va llenando con todos los pares generados.

6. Devolver el resultado

return pairs; devuelve el array final que contiene todos los pares.
 */