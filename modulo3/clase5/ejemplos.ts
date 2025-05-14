/////OBJETOS///////////////
// Definicion de una interfaz
interface Estudiante {
    nombre: string;
    edad: number;
    materiaFavorita: string;
    promedio: number;

    saludar: () => void //metodo saludar que no devuelve valor
    obtenerDetalles: () => string // metodo que devuelve string (con detalles del alumno)
}

// creacion de un objeto que cumple con la interfaz estudiante
const estudiante1: Estudiante = {
    nombre: "Ana",
    edad: 16,
    materiaFavorita: 'Lengua',
    promedio: 9.5,

    // implementacion de los metodos
    // Metodo 1: saludar
    saludar: function() {
        console.log(`Hola soy ${estudiante1.nombre}`);
    },

    obtenerDetalles: function() {
        return `tengo ${estudiante1.edad} anios y mi materia favorita es ${estudiante1.materiaFavorita}`;
    }
}

// uso del metodo saludar
estudiante1.saludar()

//uso del metodo obtenerDetalles
const detalles = estudiante1.obtenerDetalles()
console.log(detalles);


/////////CLASE/////////////

// Definimos una clase
class Gato {
    // propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    // constructor 
    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza
    }
    // metodo para obtener info del gatito
    public obtenerInformacion(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`
    }
    // metodo para cambiar la raza del gatito
    public cambiarRaza(nuevaRaza: string): void {
        this.raza = nuevaRaza;
    }
}

//Creamos una instancia de la clase gato
const gato1 = new Gato('Miau', 2, 'siames')

// llamamos al metodo obtenerinfo
console.log(gato1.obtenerInformacion());

// cambiamos la raza
gato1.cambiarRaza("persa")
console.log(gato1.obtenerInformacion());

//////MODIFICADORES//////////
export class Animal {
    // propiedades
    public nombre: string;
    private tipoAlimento: string;
    protected especie: string;

    //constructor
    constructor (nombre: string, tipoAlimento:string, especie: string) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }

    // metodo publico: accesible desde cualquier parte
    public describirAnimal(): void {
        console.log(`Este es ${this.nombre}, un animal de la especie ${this.especie}`);
    }

    private mostrarTipoAlimento(): void {
        console.log(`${this.nombre} se alimenta con ${this.tipoAlimento}`);
    } 

    protected sonidoAnimal(): void {
        console.log(`${this.nombre} hace un sonido`);
    }
}
// porque void?
// La función hace algo (en este caso, muestra un mensaje en la consola),
// pero no retorna ningun valor que puedas guardar en una variable o 
// usar después.

// crear la instancia 
const miAnimal = new Animal ('Gato', 'coquito', 'felino')
miAnimal.describirAnimal()
//miAnimal.mostrarTipoAlimento()
//miAnimal.sonidoAnimal()