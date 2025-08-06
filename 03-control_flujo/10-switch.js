let accion = "Actualizar";                      // en caso de cambiar Actualizar por "guardar", que si es case definido, guardaria y se pararia despues de esa orden gracias al brake

switch (accion){
    case "listar":
        console.log("Acción de listar");
        break;                                  // Después de un case hay que colocar un break para que no pase a la siguiente orden directamente
    case "guardar":
        console.log("Accion de guardar");
        break;
    default:                                    // default se ejecuta cuando no hay un case al cual la variable pueda responder, como una accion no definida
        console.log("Acción no reconocida")
} 