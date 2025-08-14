/**
 * Crear algoritmo que devuelva
 * el precio del producto
 * más impuesto
 */

function precioCompleto(precio, impuesto) {
return precio * impuesto + precio;
}

let resultado = precioCompleto(19.90, 0.21);
console.log(resultado);

/**
 * Cómo funciona la función precioCompleto

1.Parámetros de entrada

precio: número que representa el precio base del producto.

impuesto: número que representa el impuesto como fracción decimal (por ejemplo, 0.21 = 21%).

2.Cálculo del impuesto

precio * impuesto calcula el monto del impuesto.

Si precio = 19.90 e impuesto = 0.21, el resultado sería 4.179 (21% de 19.90).

3.Suma del impuesto al precio base

(precio * impuesto) + precio suma el impuesto al precio original para obtener el precio total.

Siguiendo el ejemplo: 4.179 + 19.90 = 24.079.

4.Devolver el resultado

return (precio * impuesto) + precio; devuelve ese valor total al lugar donde fue llamada la función.

5.Uso de la función

precioCompleto(19.90, 0.21) devuelve 24.079.

console.log(resultado); muestra el número en la consola.
 */