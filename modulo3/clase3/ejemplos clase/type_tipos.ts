//1. Alias de tipo primitivo
//Alias para tipos básicos o primitivos coo number, string y boolean

type ID = number;// alias para numeros (id representa un numero)
type nombre = string;// alias para cadenas 
type activo = boolean // alias para booleano

// usando los alias para declarar vatiables
let usuarioID: ID = 123// variables de tipo id (number)
let nombreUsuario: nombre = "Lucía"
let cuentaActiva: boolean = true

console.log(`Usuario: ${nombreUsuario}, id: ${usuarioID}, activo: ${cuentaActiva}`);


//2. Alias para objetos
//alias para definir un objeto complejo
// en ese caso una direccion con tres propiedades

type direccion = {
    calle: string;
    city: string;
    codigoPostal: number;
}

//usamos el alias direccion para crear un objeto con las propiedades especificas
let miDireccion: direccion = {
    calle: "Avenida Jujuy",
    city: "Buenos Aires",
    codigoPostal: 1234
}

console.log(`Vivo en ${miDireccion.calle}, ${miDireccion.codigoPostal}, ${miDireccion.city}`);


//3.alias para uniones de tipos
//donde una variable puede tener uno o varios tipos posibles
type Resultado = 'exito' | 'error' // resultado solo puede ser exito o error
type idUsuario = string | number

//usamos el alias resultado y idUsuario para definir las variables
let estadoOperaciones : Resultado = "exito"
let idUsuario1: idUsuario = 4358
let idUsuario2: idUsuario = "Laura"

console.log(`Estado operacion: ${estadoOperaciones}, Id usuario 1: ${idUsuario1}`);



