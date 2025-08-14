/**
 * Crear algoritmo que imrpima números impares
 */

let i = 0;
while (i <= 10) {
    if (i % 2 !== 0) {
        console.log("impar", i);
    }
    i++;
}


/**
 * Cómo funciona el bucle while

1.Inicialización

let i = 0;


Se declara la variable i y se inicializa con 0. Esta variable se usará como contador.

2.Condición del bucle

while (i <= 10)


Mientras i sea menor o igual que 10, el bloque dentro del while seguirá ejecutándose.

Cuando i sea mayor que 10, el bucle se detendrá.

3.Comprobación de impar

if (i % 2 !== 0)


i % 2 calcula el resto de dividir i entre 2.

Si el resto no es (!==) igual a 0, significa que i es impar.

Si es impar, se ejecuta:

console.log("impar", i);


Esto imprime la palabra "impar" seguida del valor de i.

4.Incremento del contador

i++;


Suma 1 a i en cada iteración, para que el bucle avance y eventualmente termine.
 */




/** 
 * con la siguiente formula conseguimos el mismo algoritmo con una sola linea y además añadimos que muestre tambien los pares
 * 
for (let i = 1;i < 10;i++) {
    if (i % 2 != 0){                
            console.log("numero impar", i);
    } else { 
        console.log("numero par", i);
    }
}
    */