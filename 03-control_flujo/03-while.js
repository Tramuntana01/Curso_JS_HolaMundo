// cuales son los numeros pares

let i = 0;                          // con la variable i indicamos que el valor es 0, despues con i++ le indicamos que queremos sumar un valor más cada vez.
while (i < 10) {                    // esto haria que el bucle que va sumando +1 al valor i, detecte si es menor que 10, al llegar a 10 este bucle pararia.
    if (i % 2 == 0){                // con % sabemos si "i" es divisible de 2, resultado 0, por lo tanto numero par, al estar en un bucle divide todos los numeros hasta llegar a 10 y cuenta solamente los pares
            console.log("numero par", i);
    }

    i++;
}

console.log("fuera del while");