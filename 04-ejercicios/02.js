/**
 * En este ejercicio tenemos que validar que resolución estamos usando dependediendo del ancho y alto, para eso tenemos que usar un if con varios "else if"
 * 
 * Nombre: ancho x alto
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */
function nombreResolucion(ancho, alto) {
  if (ancho >= 7680 && alto >= 4320) {
    return "8k";
  } else if (ancho >= 3840 && alto >= 2160) {
    return "4k";
  } else if (ancho >= 2560 && alto >= 1440) {
    return "WQHD";
  } else if (ancho >= 1920 && alto >= 1080) {
    return "FHD";
  } else if (ancho >= 1280 && alto >= 720) {
    return "HD";
  }
}

let nombre = nombreResolucion(1920, 1080);
console.log(nombre);


/**
 * Cómo funciona la función nombreResolucion

1.Parámetros de entrada

La función recibe dos valores: ancho y alto, que representan la resolución horizontal y vertical en píxeles.

2.Serie de condicionales

La estructura if / else if comprueba, en orden, desde la resolución más alta hacia la más baja.

Esto es importante porque si empezaras por la más baja (HD), muchas resoluciones más altas también cumplirían esa condición y no llegarías a evaluar las demás.

3.Primera condición

if (ancho >= 7680 && alto >= 4320)

Si el ancho es de al menos 7680 píxeles y el alto es de al menos 4320 píxeles, la función devuelve "8k" y termina.

4.Segunda condición

else if (ancho >= 3840 && alto >= 2160)

Si la primera no se cumple pero el ancho y alto cumplen este umbral, devuelve "4k".

5.Tercera condición

else if (ancho >= 2560 && alto >= 1440) → devuelve "WQHD".

6.Cuarta condición

else if (ancho >= 1920 && alto >= 1080) → devuelve "FHD".

7.Quinta condición

else if (ancho >= 1280 && alto >= 720) → devuelve "HD".

8.Qué pasa si no se cumple ninguna

Si el ancho y alto son menores que los valores de la última condición, la función no tiene return final, así que devolverá undefined.

9.Ejemplo de uso

let nombre = nombreResolucion(1920, 1080);

Pasa por la primera condición → falso.

Segunda → falso.

Tercera → falso.

Cuarta → verdadero, así que devuelve "FHD".

console.log(nombre); muestra "FHD".
 */