//short-circuit

//los valores falsy que devuelven Falso son:

//false
//0
//''
//null
//undefined
//NaN

let nombre = "Juan";
let username = nombre || "anonimo"; // con esta variable indicamos que username debe mostrar el nombre definido en la variable "nombre" y si no tiene un nombre, muestre "anonimo"
console.log(username);

function fn1() {
    console.log("soy funcion 1");
    return false;
}

function fn2() {
    console.log("soy funcion 2");
    return true;
}

let x = fn1() && fn2();