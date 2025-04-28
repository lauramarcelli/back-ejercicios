/*Ejercicio 1: Operaciones básicas con Arrays
1. Declara un array de números con los valores [5, 10, 15, 20, 25].
2. Imprime el tercer elemento del array.
3. Añade el número 30 al final del array.
4. Elimina el primer número del array.
5. Muestra por consola la longitud actual del array.*/


const numeros1: number[] = [5, 10, 15, 20, 25];
console.log(numeros1[2]);
numeros1.push(30);
numeros1.shift();
console.log(numeros1.length);


/*Ejercicio 2: Creación de Objetos y Atributos
1. Define un objeto que represente un libro con las siguientes propiedades:
título, autor, y año de publicación.
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola*/

class Libro {
    titulo: string; 
    autor: string; 
    año: string;

    constructor(titulo: string, autor: string, año: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }  

    descripcion(): void {
        console.log(`El titulo es${this.titulo} y el autor ${this.autor}, fue publicado en ${this.año}`);
        
    }
}

const libro1 = new Libro('1984', 'George Orwell', '1949')
console.log(libro1);

/*Ejercicio 3: Métodos en Objetos
1. Modifica el objeto del ejercicio anterior para que incluya un método
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola.*/



