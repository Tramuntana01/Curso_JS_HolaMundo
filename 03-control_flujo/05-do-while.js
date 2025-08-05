//el "do while" a diferencia del while primero ejecuta la condicion y luego la evalua

let i = 2;                          
while (i < 2) {                    // en este caso no mostraria nada por que i es = a 2 y no encuentra ningun valor menor a 2 antes de hacer la ejecucion del codigo
    if (i % 2 == 0){                
            console.log("numero par", i);
    }

    i++;
}


                                    // depende de la funcion que comentemos, mostrara un resultado u otro.


do {                                // en este caso primero ejecuta el codigo, mostrara que hay un numero par "2"
    if (i % 2 == 0) {                
            console.log("numero par", i);
    }

    i++;
} while (i < 2);

console.log("fuera del while");