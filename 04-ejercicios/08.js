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

function toPairs(arr) {
    let pairs = [];
}

let resultado = toPairs(array);
console.log(resultado);