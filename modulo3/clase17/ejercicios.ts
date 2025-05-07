/*Ejercicio 1: Declarar y asignar tipos primitivos
Crea un programa en TypeScript donde se declaren variables para almacenar tu
nombre, edad y si eres estudiante, utilizando los tipos de datos correctos.
Luego, imprime esos valores en la consola*/

let names: string = "Laura Marcelli"
let age: number = 42
let student: boolean = true

console.log('Mi nombre es: ', names, 'tengo: ', age, 'y soy estudiante: ', student) 


/*Ejercicio 2: Modifica el valor de una variable
Declara una variable con el tipo any, asigna inicialmente un valor numérico,
luego cambia su valor por una cadena de texto, y finalmente imprime ambos
valores*/

let edad :  any = 20
edad = "veinte"
console.log(edad);


/*Ejercicio 3: Combina variables primarias
Declara variables para almacenar tu nombre y edad. Combina esas variables en
un solo mensaje usando plantillas de cadena (template literals) e imprímelo en
la consola.*/

let nameStudent : string = "Laura"
let edadStudent : number = 42
console.log(`Hola soy ${nameStudent} y tengo ${edadStudent} años`);

/*Ejercicio 4: Parámetros opcionales simulados. Declara dos variables, una para almacenar un nombre y otra para almacenar una
edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
proporcionada". Si se asigna la edad, imprímela junto al nombre*/

let nameExercise : string = "Lorena"
let ageExercise: number | undefined = undefined

if (ageExercise === undefined){
    console.log('Edad no proporcionada');
} else {
    console.log(`Hola soy ${nameExercise} y tengo ${ageExercise} años`);
}

ageExercise = 22

if (ageExercise === undefined){
    console.log('Edad no proporcionada');
} else {
    console.log(`Hola soy ${nameExercise} y tengo ${ageExercise} años`);
}

/*Ejercicio 5: Datos nulos y diferenciados
Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena,
y luego cambia su valor a null. Imprime ambos estados en la consola, explicando
el significado de null en TypeScript*/
let nameNull : string | null = "Lorena"
console.log(nameNull);

nameNull = null
console.log(nameNull, 'Null es un tipo de dato que representa un tipo de valor que no se conoce o no está definido');


/*Ejercicio 6: Uso de unknown
Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta
variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los
valores*/

let ageKid : unknown = 10
console.log(typeof ageKid, ` es ${ageKid}`);

ageKid = "diez"
console.log(typeof ageKid, ` es ${ageKid}`);

ageKid = true
console.log(typeof ageKid, ` es ${ageKid}`);

/*Ejercicio 7: Tipos literales
Usa un tipo literal para declarar una variable que solo acepte uno de los valores:
"Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en
TypeScript*/

let day: "Lunes" | "Martes" | "Miércoles" = "Lunes"
day = "Miércoles"
console.log(day);

/*Ejercicio 8: Cálculo simple con datos primitivos
Declara dos variables numéricas, realiza una operación matemática simple con
ellas (como una suma), y guarda el resultado en una tercera variable. Imprime el
resultado*/

let num1 : number = 1
let num2 :  number = 2
let addition :  number = num1 + num2
console.log(addition);

/*Ejercicio 9: Comparaciones lógicas
Declara dos variables booleanas y realiza una comparación lógica (como AND,
OR). Imprime el resultado*/

let boolean1 :  boolean = true
let boolean2 : boolean = false
console.log(boolean1 && boolean1);

/*Ejercicio 10: Uso de objetos
Declara un objeto en TypeScript con propiedades de tipo string, number y
boolean. Accede a estas propiedades e imprímelas en la consola*/

let human : {
    name: string 
    age : number 
    isAlive  : boolean 
}

human = {
    name: "Alan",
    age: 35,
    isAlive: true
}

console.log(human.name, human.age, human.isAlive);
