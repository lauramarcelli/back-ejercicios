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



