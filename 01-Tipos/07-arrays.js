let animales = ["cerdo", "caballo"]; //array literal, se puede implementar vacio o con contenido en el momento de la creacion
console.log(animales);
console.log(animales[0]); // esto hara que solo muestre en consola el primer objeto

animales[2] = "perro"; //asi añadimos un nuevo objeto en el array, 0 es cerdo y 1 es caballo, por eso usamos 2
console.log(animales); // ahora, este log mostrara los 3 objetos, añadiendo el ultimo animal, perro. 

animales[10] = "gato"; // si añadimos un objeto dejando un vacio entre un objeto y otro, dejara en este caso 7 objetos vacios con una longitud de array de 11 valores.
console.log(animales[7]); // con esto mostrará un objeto vacio "undefined" en consolaya que no le hemos dado un valor
console.log(typeof animales); // asi mostrara de que tipo de dato es "animales", que es un array, pero lo muestra como object
animales.length //por el motivo de arriba, podemos acceder a las propiedades de un objeto de esta manera, esto devuelve la cantidad de elementos que se encuentra dentro de este array