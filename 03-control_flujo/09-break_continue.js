// break permite cortar un loop y continue saltar una iteración (se puede usar en for, for in, for of y do while)

let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue; // debido a continue, al hacer la iteración del bucle while, salta la linea de i === 2. Hemos indicado que si i es = a 2 entonces continue a la siguiente linea saltando esta orden, por lo que no muestra 2 en el console log.
    }
    if (i === 4) {
        break;    // debido al break, la iteracion se parará al llegar al numero 4, hemos indicado que si i = a 4, no siga la orden dando por finalizado el loop, consola muestra 1 y 3 (no muestra 2 por que lo saltamos con continue)
    }
    console.log(i);
}