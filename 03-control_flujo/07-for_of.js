//while, do while y for permiten calculcar como realizar una iteración de manera manual

//para iterar un listado de elementos podriamos hacerlo con while pero en JS se itera de manera mas sencilla con for of:

let animales = ["Chanchito feliz", "Dragón", "Perrito"];  // hacemos un array de animales

for (let animal of animales) {
    console.log(animal);
}

// asi mostramos un array de animales

//con while de manera manual:

let i = 0;
while (i < animales.length) { // con length limitamos el bucle al numero de objetos del array, en este caso 3, garantiza que no pase los limites del array
    console.log(animales[i]); // con i indicamos que empieza por el primer objeto del array en este caso, chanchito feliz
    i++;
}