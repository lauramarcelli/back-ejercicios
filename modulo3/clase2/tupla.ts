//declaracion de inicializacion de la tupla
let persona : [string, number]

//inicializacion de la tupla
persona = ['Ana', 35]

//accedemos a los elementos de la tupla
console.log("Nombre: ", persona[0]);
console.log("Edad: ", persona[1]);

//Modificamos la tupla
persona[1] = 40
console.log("Edad actualizada: ", persona[1]);

//Desestructuracion de la tupla
export let [nombre, edad] = persona
console.log(`La persona se llama ${nombre} y tiene ${edad} años`);




