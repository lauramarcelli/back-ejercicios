/*Ejercicio 8: Sistema de Gestión de Cursos
Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase
abstracta Persona, clases concretas Estudiante y Profesor, y una clase Curso que
contenga los estudiantes y el profesor*/

abstract class Persona{
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre: string, apellido: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido
    }

    abstract mostrarInformacion(): void
} 

class Estudiante extends Persona{
    private _matricula: String;
    constructor(nombre: string, apellido: string, edad: number, matricula: string){
        super(nombre, apellido, edad)
        this._matricula = matricula
    }

    mostrarInformacion(): void {
        console.log(`Estudiante Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad} Matricula: ${this._matricula}`);
    }
}

class Profesor extends Persona{
    private _materia: string;
    constructor(nombre: string, apellido: string, edad: number, materia: string){
        super(nombre, apellido, edad)
        this._materia = materia
    }
    mostrarInformacion(): void {
        console.log(`Profesor Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad} Materia: ${this._materia}`);
    }
}

class Curso{
    nombreCurso: string;
    private _profesor: Profesor;
    private _estudiantes: Estudiante[];

    constructor(nombreCurso: string, profesor: Profesor, estudiantes: Estudiante[]){
            this.nombreCurso= nombreCurso;
            this._profesor = profesor;
            this._estudiantes = estudiantes;
        }

    agregarEstudiante(estudiante: Estudiante){
        this._estudiantes.push(estudiante)
    }    

    mostrarInformacion(): void {
        console.log(`Curso: ${this.nombreCurso} Profesor: ${this._profesor.nombre} ${this._profesor.apellido} Estudiantes: ${this._estudiantes.length}`);
    }
}

const profesors1 = new Profesor('Juan', 'Perez', 30, 'Matematicas');
const estudiante1 = new Estudiante('Luis', 'Gomez', 20, '123456');
const curso1 = new Curso('Matematicas', profesors1, [estudiante1]);
profesors1.mostrarInformacion();
estudiante1.mostrarInformacion();
curso1.mostrarInformacion()

/*
Ejercicio 9: Sistema de Gestión de Compras
Crea un sistema que gestione productos y órdenes de compra. Usa una clase
abstracta Producto, clases concretas Electrónico y Alimento, y una clase
OrdenCompra que contenga múltiples productos
*/ 
abstract class Producto{
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }   

    mostrarInformacion(): void{} 
}

class Electronico extends Producto{
    marca: string;

    constructor(nombre: string, precio: number, marca: string){
        super(nombre, precio)
        this.marca = marca
    }
    mostrarInformacion(): void {
        console.log(`Producto Electronico Nombre: ${this.nombre} Precio: ${this.precio} Marca: ${this.marca}`);
    }
}

class Alimento extends Producto{
    tipo: string;

    constructor(nombre: string, precio: number, tipo: string){
        super(nombre, precio)
        this.tipo = tipo
    }
    mostrarInformacion(): void {
        console.log(`Producto Alimento Nombre: ${this.nombre} Precio: ${this.precio} Tipo: ${this.tipo}`);
    }
}

class OrdenCompra{
    productos: Producto[];

    constructor(){
        this.productos = []
    }
    agregarProducto(producto: Producto): void{
        this.productos.push(producto)
    }

    mostrarInformacion(): void {
        console.log(`-----------------------------------`);
        
        console.log(`Orden de Compra`);
        for(let i = 0; i < this.productos.length; i++){
            this.productos[i].mostrarInformacion();
        }
        console.log(`-----------------------------------`);
        
        
    }
}

const carne = new Alimento('Carne', 100, 'Carnes');
const mouse = new Electronico('Mouse', 50, 'Logitech');
const ordenCompra1 = new OrdenCompra();
ordenCompra1.agregarProducto(carne);
ordenCompra1.agregarProducto(mouse);
ordenCompra1.mostrarInformacion();