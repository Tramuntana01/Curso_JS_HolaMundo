// Con la instrucción de for in nos sirve para poder iterar las propiedades de un objeto, por si no conocemos las propiedades de un objeto que hayan sido asignadas durante la ejecución de la app

let user = {
    id: 1,
    name: "Chanchito feliz",
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);  // Recorremos todas las propiedades del objeto user
}                                   // En cada vuelta, 'prop' contiene el nombre de una propiedad (por ejemplo, "id")
                                    // Con user[prop] accedemos al valor correspondiente