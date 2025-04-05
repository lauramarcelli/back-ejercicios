// Ejercicio 1: Declarar y usar funciones con tipos
// Consigna: Crea una función llamada multiplicarNumeros que acepte dos
// parámetros, ambos de tipo number, y retorne el producto de ambos números.
// Luego, muestra el resultado en consola llamando a la función.
function multiplicarNumeros(a: number, b: number): number { return a*b}

console.log(multiplicarNumeros(2, 56));


// Ejercicio 2: Uso de funciones con parámetros opcionales
// Consigna: Define una función llamada saludar que acepte un parámetro nombre
// de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es
// proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y
// muestra el resultado en la consola
function saludar(nombre: string, saludo?: string){
    if (saludo){
        return `${saludo}, ${nombre}`
    }
    return `Hola, ${nombre}`
}

console.log(saludar('Laura'));


// Ejercicio 3: Creación y manipulación de objetos
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
// (string), deporte (string), y energia (number). Luego, define una función entrenar
// que acepte el objeto deportista y un número de horas de entrenamiento,
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
// final, muestra el estado del deportista en la consola
let deportista : {nombre: string; deporte: string; energia: number, entrenar: Function} = {
    nombre: 'Lionel Messi',
    deporte: 'futbol',
    energia: 100,
    
    entrenar (deportista: object, horas: number): any{
        let energiaRestante: number = this.energia - (horas * 5)
        return energiaRestante
    }
};

console.log(deportista.entrenar(deportista, 3));


// Ejercicio 4: Función que devuelve un objetoConsigna: Crea una función llamada crearLibro que acepte tres parámetros:
// titulo (string), autor (string) y paginas (number). La función debe devolver un
// objeto con esas propiedades. Luego, crea dos libros utilizando la función y
// muestra sus detalles en la consola
function crearLibro(titulo: string, autor: string, paginas: number ): Object {
    return {titulo, autor, paginas}
}

let elPrincipito: object = crearLibro('El principito', 'Saint Exupery', 120)
let miPlanta: object = crearLibro('Mi planta de naranja lima', 'José Vasconcelo', 90)
console.log(elPrincipito, miPlanta);
