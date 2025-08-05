/* let i = 2;
while (i < 2) {                    
    if (i % 2 == 0){                
            console.log("numero par", i);
    }

    i++;
}
*/ 

// for (inicializacion;comparacion;terminariteracion) { 
// }

// for se compone de 3 unicas expresiones, en este caso, definir la variable, preguntar si i es menor que 10 y por ultimo sumar +1 a i, se ejecuta una expresion tras otra, 
// si i fuese mayor que 10 en este caso, no pasaria a la tercera expresion

for (let i = 2;i < 10;i++) {
    if (i % 2 == 0){                
            console.log("numero par", i);
    }
}

/*
¿Cuándo usar cada uno?

Usar for cuando:
Tienes un número conocido de repeticiones.

El contador y condición son simples y están relacionados.

Quieres todo en una línea clara.

Usar while cuando:
La condición es compleja o no está ligada a un número exacto.

Necesitas más control (ej. romper el bucle bajo ciertas condiciones).

No sabes cuántas veces se repetirá.
*/