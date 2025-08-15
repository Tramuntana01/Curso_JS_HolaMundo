/**
 * Crear algoritmo que devuelva un
 * array de objetos en base a pares
 */

let pairs = [
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Juan"}],
];

let array = [{
    id: 1,
    name: "Nicolas",
}, {
    id: 2,
    name: "Felipe",
}, {
    id: 3,
    name: "Juan",
}];

function toCollection(arr) {
    let collection = [];
    for (let elemento of arr){
        let par = {id: par[0], };
        colection.push(par);
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);