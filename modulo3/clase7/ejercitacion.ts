/*1. Ejercicio de Coche
Diseña una clase Coche que represente un vehículo. Esta clase debe tener 
propiedades privadas para marca, modelo, año, y kilometraje. Implementa 
métodos para encender el coche y realizar un viaje, que incrementen el 
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se 
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta 
establecer un año o kilometraje no válido, imprime un mensaje indicando el 
error.*/

class Coche {
    private _mark: string;
    private _model: string;
    private _year: number;
    private _kilometers: number
    constructor(mark: string, model: string, year: number, kilometers: number) {
        this._mark = mark;
        this._model = model;
        this._year = year;
        this._kilometers = kilometers;
    }

    public set year(value: number){
        if(value>1886){
            this._year = value
        } else {
            console.log(`Este año no es válido`);
        }
    } 

    public set kilometers(value: number){
        if (value > 0){
            this. _kilometers = value;
        } else {
            console.log('Este kilometraje no es valido');
        }
    }
    turnOn(): void {
        console.log('El coche está encendido');
    }

    drive(): void{
        console.log('Viajando');
    }
}

const coche1 = new Coche('Ford', 'Mustang', 2022, 100);
coche1.year = 1720;
coche1.kilometers = -200;
coche1.turnOn();
coche1.drive(); 

/*2. Ejercicio de Libro
Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe 
tener propiedades privadas para titulo, autor, anioPublicacion, y disponible. 
Implementa métodos para prestar y devolver el libro, asegurando que solo se 
pueda prestar si está disponible y que se pueda devolver solo si ha sido 
prestado. Imprime un mensaje en caso de que se intente realizar una acción no 
válida*/

class Book {
    private _title: string;;
    private _author: string;
    private _year: number;
    private _available: boolean;

    constructor(title: string, author: string, year: number, available: boolean){
        this._title = title;
        this._author = author;
        this._year = year;
        this._available = available;
    }

    public set availability(value: boolean){
        if(value === true){
            this._available = value;
            console.log('El libro esta disponible')
        } else if (value === false) {
            console.log('El libro no esta disponible');
            this._available = value;
        } else {
            console.log('El valor ingresado no es valido');
            
        }
    }

    loanBook(): void {
        console.log('El libro ha sido prestado');
    }

    returnedBook(): void {
        console.log('El libro ha sido devuelto');
    }

}
const book1 = new Book('1984', 'George Orwell', 1949, true);
book1.loanBook();
book1.returnedBook();
book1.availability = false;
console.log(book1);


/*3. Ejercicio de Estudiante. Diseña una clase Estudiante que contenga propiedades privadas para nombre, 
edad, y calificaciones. Implementa métodos para agregar calificaciones y 
calcular el promedio. Imprime un mensaje en caso de que se intente agregar 
una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para 
calcular el promedio.*/


class Student {
    private _name: string;
    private _age: number;
    private _grades: number[];

    constructor(name:string, age: number){
        this._name = name;
        this._age = age;
        this._grades = [];
    };

    public grades(value: number): void {
        if(value<0 || value>100){
            console.log('La calificacion no es valida');
        } else {
            this._grades.push(value)
        }
    };

    public average(): number {
        if(this._grades.length === 0){
            console.log('No hay calificaciones para calcular el promedio');
            return 0
        } else {
            return this._grades.reduce((a,b) => a + b, 0)/this._grades.length
        }

    }

    public getName(): string {
        return this._name
    }
}

const student1 = new Student ('Laura', 42)
student1.grades(10);
student1.grades(9);
student1.grades(7);
console.log(`El promedio de ${student1.getName()} es ${student1.average()}`);


/*4. Ejercicio de Aviones
Crea una clase Avion con propiedades privadas para el modelo, capacidad y 
velocidad. Implementa getters y setters para cada propiedad, asegurándote de 
validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
Nota sobre la inicialización de propiedades
En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las 
propiedades _capacidad y _velocidad. Esto se hace para evitar un error de 
TypeScript que indica que estas propiedades no estaban inicializadas en el 
constructor. Este enfoque asegura que las propiedades serán asignadas 
adecuadamente en el constructor mediante el uso de los setters, manteniendo 
así la validación de los valores. Tener esto en cuenta para los demás ejercicios.*/

class Plane {
    private _model: string;
    private _capacity!: number;
    private _speed!: number;

    constructor(model: string, capacity: number, speed:number){
        this._model = model;
        this._capacity = capacity;
        this._speed = speed;
    }

    get model(): string {
        return this._model
    }

    get capacity(): number {
        return this._capacity
    };

    get speed(): number {
        return this._speed
    }

    set capacity(value: number){
        if(value < 0) {
            console.log('la capacidad no ser menor a 0');
        }
    }

    set speed(value: number){
        if(value < 0){
            console.log('La velocidad no puede ser negativa')
        }
    };
}

const plane1 = new Plane('Boing 747', 500, 1000);
console.log(plane1)



////POLIMORFISMO///////

/*Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
Implementa una clase Calculadora que tenga un método sumar. El método debe 
estar sobrecargado para permitir la suma de:
• Dos números enteros.• Tres números enteros.
• Dos cadenas, concatenando las dos cadenas*/

class Calculator {
    addition(a: number, b: number): number

    addition(a: number, b: number, c: number): number

    addition(a: string, b: string): string

    //Implementacion del metodo

    addition(a: number | string, b: number | string, c?: number) : number | string | null  {
        if(typeof a === 'number' && typeof b === 'number') {
            if (c !== undefined) {
                return a + b + c
            }
            return a + b
        } else if (typeof a === 'string' && typeof b === 'string'){
            return a + b
        } else {
            return null
        }
    }
}

const calculator1 = new Calculator();
console.log(calculator1.addition(1, 2));
console.log(calculator1.addition(1, 2, 3));
console.log(calculator1.addition('hola', ' mundo, cómo estas?'));

/*Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y 
Moto. Cada clase debe sobrescribir el método arrancar de la clase base para 
proporcionar una implementación específica de cómo arrancar*/

class Vehicle {
    start(): void {
        console.log('El vehiculo arranca');
    }
}

export class Car extends Vehicle {
    start(): void {
        console.log('El auto arranca una vez introducida la llave en el volante');
    }
}

class Motorcycle extends Vehicle {
    start() : void {
        console.log('La motocicleta arranca con el pedal de gas');
    } 
}

const car1 = new Car();
car1.start()

const moto1 = new Motorcycle()
moto1.start()

/*Ejercicio 3: Encapsulamiento con Métodos Privados
Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser 
modificado a través de un método depositar y otro retirar, los cuales deben 
validar que la cantidad no sea negativa. Implementa métodos públicos para 
consultar el saldo*/

class Bank {
    private _balance: number;

    constructor(balance: number){
        this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this._balance += amount
            console.log(`Deposito de $${amount} realizado. Saldo actual: $${this._balance}`);
        } else {
            console.log('La cantidad a depositar deber ser mayor a 0');
        }
    }

    withdraw(amount: number): void {
        if (amount > 0) {
            this._balance -= amount
            console.log(`Retiro de $ ${amount} realizado. Saldo actual $ ${this._balance}`);
        } else {
            console.log(`La cantidad a retirar deber ser mayor a 0`);
        }
    }

    checkBalance(): number {
        return this._balance
    }
}

const bank1 = new Bank(1000)
bank1.deposit(500);
bank1.withdraw(200);
console.log(bank1.checkBalance());


/*Ejercicio 4: Abstracción con Clases Abstractas
Implementa una clase abstracta DispositivoElectronico con métodos abstractos 
encender y apagar. Crea dos clases concretas Televisor y Radio, que 
sobrescriban estos métodos*/

abstract class ElectronicDevice {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

class Tv extends ElectronicDevice {
    turnOn(): void {
        console.log('El televisor se encuentra encendido');
    }

    turnOff(): void {
        console.log('El televisor se encuentra apagado');
    }
}

class Radio extends ElectronicDevice {
    turnOn(): void {
        console.log('La radio se encuentra encendida');
    }

    turnOff(): void {
        console.log('La radio se encuentra apagada');
    }
}

const tv1 = new Tv()
tv1.turnOn()
tv1. turnOff()

const radio1 = new Radio()
radio1.turnOn()
radio1.turnOff()
