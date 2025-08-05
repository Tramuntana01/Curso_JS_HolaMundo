//los objetos son de tipo referencia, no primitivos

//usamos de ejemplo un personaje de TV

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = { // estas llaves {} son un objeto literal, dentro de ellas indicamos las variables que pertenecen a un mismo objeto
    nombre: "Tanjiro", //en JS las lineas dentro de un objeto literal se les llama "par llave-valor", por lo que nombre seria la llave o propiedad, llamado atributo en otros lenguajes
    edad: 16,
    anime: "Demon Slayer",
};  

console.log(personaje);
console.log(personaje.nombre); // asi mostramos en consola una propiedad especifica, indicamos el objeto punto la propiedad
console.log(personaje["anime"]); //esta es otra manera de acceder a las propiedades de un objeto

personaje.edad = 14; // asi cambiariamos una propiedad de un objeto
/* personaje["edad"] = 12; /* esta es otra forma de cambiar la propiedad, mas acertada en caso de iterar
                            por que nos permite añadir variables */
let llave = "edad";
personaje[llave] = 16; //ojo! sin comillas al ser una variable, no una propiedad

delete personaje.anime; //si en el project vamos a trabajar solo con este anime, podemos eliminar esta variable de esta forma
console.log(personaje);
