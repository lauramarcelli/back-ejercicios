//1. definicion de un enum numerico
enum colores {
    Rojo, 
    Verde,
    Azul,
}

//Acceder a los valores del enum
let coloresFavoritos : colores = colores.Verde;
console.log('Color favorito (por numero): ', coloresFavoritos);

console.log('Nombre del color por indice: ', colores[1]);

//2. definicion de enum de cadenas
enum Direcciones {
    Norte = 'N',
    Sur = 'Sur',
    Este = 'E',
    Oeste = 'O',
}

//asignar un valor de enum a una variable
let direccionViaje : Direcciones = Direcciones.Norte; 
console.log('Direccion del viaje: ', direccionViaje);


