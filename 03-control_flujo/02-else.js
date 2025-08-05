let edad = 18;

if (edad > 17) {                            //si el usuario cumple la condicion, muestra el primer log
    console.log("Usuario mayor de edad");
} else if (edad > 13) {                     // si el usuario no cumple la primera, pero cumple con la segunda >13 años, se muestra el segundo log
    console.log("Usuario necesita estar acompañado de un adulto");
} else {                                    // si el usuario no cumple con la primera ni con la segunda, <13 años, se muestra el ultimo log
    console.log("Usuario menor de edad, no puede ingresar");
}