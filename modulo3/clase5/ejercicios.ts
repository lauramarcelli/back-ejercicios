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
        console.log(`El titulo es ${this.titulo} y el autor ${this.autor}, fue publicado en ${this.año}`);
        
    }
}

const libro1 = new Libro('1984', 'George Orwell', '1949')
console.log(libro1);

/*Ejercicio 3: Métodos en Objetos
1. Modifica el objeto del ejercicio anterior para que incluya un método
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola.*/


console.log(libro1.descripcion());

/*Ejercicio 4: Clases y Objetos1. Define una clase llamada Animal con propiedades nombre y tipo, y un
método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método*/

class Animals {
    name: string;
    type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    makeSound(): void {
        console.log(`El animal ${this.name} hace un sonido`);
    }
}

const dog = new Animals('Fido', 'Perro');
console.log(dog.makeSound());


/*Ejercicio 5: Interfaz
1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
método presentarse().
2. Crea una clase llamada Persona que implemente esta interfaz y
proporciona la implementación del método presentarse()*/

interface Ipersona {
    name: string;
    age: number;

    introduce: () => void 
}

class Personas {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    introduce(): void{
        console.log(`Mi nombre es ${this.name} y tengo ${this.age} años`);
    }
}

const persona1 = new Personas('Alan', 20);
console.log(persona1.introduce());

/*Ejercicio 6: Uso de this
1. Crea una clase llamada Mariposa con propiedades nombre y color, y un
método volar() que use this para referirse a las propiedades de la
instancia.
2. Crea una instancia de la clase y llama al método*/

class Butterfly {
    name: string;
    color: string;

    constructor(name: string, color: string){
        this.name = name;
        this.color = color;
    }

    fly(): void {
        console.log(`La mariposa ${this.name} esta volando`);
    }
}

const buttefly1 = new Butterfly('monarca', 'naranja')
console.log(buttefly1.fly());

/*Ejercicio 7: Modificadores de Acceso
1. Define una clase Coche con propiedades marca, modelo (públicas) y
precio (privada).
2. Implementa un método para mostrar la información del coche que acceda
a las propiedades públicas y no a la privada directamente*/

class Car {
    public tradeMark: string;
    public model: string;
    private price: number;

    constructor(tradeMark: string, model: string, price: number){
        this.tradeMark = tradeMark;
        this.model = model;
        this.price = price;
    }

    public info(): void {
        console.log(`El coche ${this.tradeMark} ${this.model} tiene un precio de ${this.price}`);
    }
}

const car1 = new Car('Audi', 'A3', 20000);
console.log(car1.info());

/*Ejercicio 8: Integramos contenidos - Animales1. Crea un pequeño sistema de gestión de Animales que incluya las clases
Animal, Mascota, y MascotaExotica.
o La clase Animal debe tener propiedades como nombre y tipo.
o La clase Mascota debe extender Animal e incluir una propiedad para
dueño.
o La clase MascotaExotica debe extender Animal e incluir una
propiedad para habitat.
2. Implementa métodos para mostrar información sobre cada tipo de animal
y agrega ejemplos de instanciación*/

class AnimalAll {
    name: string;
    type: string;

    constructor(name: string, type: string){
        this.name = name;
        this.type = type;
    }

    public showInfoAnimals(): void {
        console.log(`El animal ${this.name} es un ${this.type}`);
    }
}

class Pet extends AnimalAll {
    owner: string;

    constructor (name: string, type: string, owner: string){
        super(name, type);
        this.owner = owner;
    }

    public showInfoPets(): void {
        console.log(`El animal ${this.name} es un ${this.type} y su dueño es ${this.owner}`);
        
    }
}

class ExoticPet extends AnimalAll {
    habitat: string;


    constructor (name: string, type: string, habitat: string){
        super(name, type)
        this.habitat = habitat
    }

    showInfoExoticPets(): void {
        console.log(`El animal ${this.name} es un ${this.type} y vive en ${this.habitat}`);
    }
}

const animal1 = new AnimalAll('vaca', 'mamifero');
console.log(animal1.showInfoAnimals());

const pet1 = new Pet('perro', 'mamifero', 'Alan');
console.log(pet1.showInfoPets());

const petExo1 = new ExoticPet('tortuga', 'reptil', 'Pehuajo');
console.log(petExo1.showInfoExoticPets());