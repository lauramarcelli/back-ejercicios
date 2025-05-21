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
function saludar1(nombre: string, saludo?: string){
    if (saludo){
        return `${saludo}, ${nombre}`
    }
    return `Hola, ${nombre}`
}

console.log(saludar1('Laura'));


// Ejercicio 3: Creación y manipulación de objetos
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
// (string), deporte (string), y energia (number). Luego, define una función entrenar
// que acepte el objeto deportista y un número de horas de entrenamiento,
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
// final, muestra el estado del deportista en la consola
let deportista : {
    nombre: string; 
    deporte: string; 
    energia: number, 
    entrenar: Function} = {
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


/*Ejercicio 6: Tipos de parámetros y funciones que retornan objetos
Consigna: Crea una función llamada crearPersona que acepte tres parámetros:
nombre (string), edad (number), y pais (string). La función debe devolver un
objeto que tenga esas propiedades. Luego, imprime el objeto retornado en la
consola*/
function crearPersona (name: string, age: number, country: string) : object{
    return{name, age, country}
}

console.log(crearPersona('Lucía', 8, 'Argentina'));

/*Ejercicio 7: Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto
empleado con las propiedades nombre (string) y salario (number), y un número
que represente el porcentaje de aumento. La función debe aumentar el salario
del empleado y devolver el nuevo salario. Muestra en la consola el resultado*/
let empleado: {name: string, salario: number, aumentarSalario: Function} = {
    name: 'Emma Lopez',
    salario: 1000,

    aumentarSalario(empleado: object, aumento: number): any{
        let salarioAumentado: number = this.salario + (this.salario*aumento/100) 
        return console.log(`la/el empleada/o ${this.name} ahora tiene un salario de ${salarioAumentado}`), salarioAumentado
    }
}

console.log(empleado.aumentarSalario (empleado, 10));

/*Ejercicio 8: Funciones con diferentes tipos de retorno
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
función debe retornar el área de la figura. Usa tipos específicos para cada caso*/

type Circles = {
    tipo: 'circulo';
    radio: number;
}

type Rectangles = {
    tipo: 'rectangulo';
    base: number;
    altura: number;
}

type Figura = Circles | Rectangles

function calcularArea(figura: Figura ): any {
if (figura.tipo === 'circulo'){
    return Math.PI* figura.radio**2;
} else if (figura.tipo === 'rectangulo'){
    return figura.base * figura.altura
} else {
    console.log('Figura no encontrada');
}
}

const areaCircle = calcularArea({tipo: 'circulo', radio: 5})
console.log(areaCircle);


