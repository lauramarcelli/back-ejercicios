/*Ejercicio 1: Herencia Simple
Consigna: Define una clase base Torta que tenga propiedades generales como
nombre y tipo, y un método hacerDescripcion() que devuelva una descripción
general de la torta. Luego, crea una clase derivada TortaDeChocolate que
extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva
"Soy una torta de chocolate, deliciosa y suave."*/

class Torta {
    nombre: string;
    tipo: string

    constructor(nombre: string, tipo: string){
    this.nombre = nombre;
    this.tipo = tipo
    }

    hacerDescripcion(): void {
        console.log(`Esta torta ${this.nombre} es conocida como ${this.tipo}`);
    }
}

class TortaDeChocolate extends Torta {
    constructor(nombre: string, tipo: string){
        super(nombre, tipo)
    }

    hacerDescripcion(): void{
        console.log(`Soy una torta de chocolate, deliciosa y suave.`);
    }
}

const tortita = new Torta('Chocotorta', 'de tipo chocolate')
tortita.hacerDescripcion()

const tortitaChoco = new TortaDeChocolate('Red Velvet', 'Con chocolate blanco')
tortitaChoco.hacerDescripcion()


/*Ejercicio 2: Herencia Simple con Acceso
Consigna: Crea una clase base Maestro con propiedades protegidas nombre y
materia, y un método enseñar(). Luego, crea una clase derivada
MaestroMatematicas que extienda de Maestro y sobrescriba el método
enseñar() para imprimir un mensaje específico de matemáticas*/

class Maestro {
    protected nombre: string;
    protected materia: string;

    constructor(nombre: string, materia: string){
        this.nombre = nombre;
        this.materia = materia;
    }

    ensenar(): void {
        console.log(`Profesor ${this.nombre} está enseñando la materia ${this.materia}`);
    }
}

class MaestroMatematicas extends Maestro {
    constructor(nombre: string, materia: string){
        super(nombre, materia)
    }

    ensenar(): void {
        console.log(`Las matemáticas son la base de la programacion `);
    }
}

const profesor1 = new Maestro('Juan', 'Literatura')
profesor1.ensenar()

const profesor2 = new MaestroMatematicas('Pedro', 'Matematicas')
profesor2.ensenar()

/*Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)Consigna: Crea dos interfaces: Volador con el método volar() y Transportable
con el método transportar(). Luego crea una clase Avion que implemente ambas
interfaces y sobrescriba los métodos*/

interface Volador{
    volar(): void;
}

interface Transportable{
    transportar(): void;
}

class Avion implements Volador, Transportable{
    volar(): void{
        console.log(`Este avión vuela arriba de los 30.000 pies de altura`);
    }

    transportar(): void{
        console.log(`Este avion transporta pasajeros y carga`);
    }
}

const avioncito = new Avion()
avioncito.volar()
avioncito.transportar()

/*Ejercicio 4: Herencia de Métodos y Sobrescritura
Consigna: Define una clase base Flor con el método describir(), que imprime un
mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol,
cada una sobrescribiendo el método describir() con un mensaje específico*/

class Flor {
    describir(): void{
        console.log(`Soy una flor`);
    }
}

class Rosa extends Flor {
    describir(): void {
        console.log(`Soy una rosa, mi color es rojo`);
    }
}

class Girasol extends Flor {
    describir(): void {
        console.log(`Soy un girasol, mi color es amarillo`);
    }
}

const flower = new Flor()
flower.describir()

const blumen = new Rosa()
blumen.describir()

const florcita = new Girasol
florcita.describir()

/*Ejercicio 5: Herencia con Modificadores de Acceso
Consigna: Crea una clase base Compania con un atributo privado
nombreCompania y un atributo protegido ingresosAnuales. Crea una clase
derivada EmpresaTecnologia que use el atributo protegido y agregue un
método que calcule el doble de los ingresos anuales*/

class Compania {
    private nameCompany: string;
    protected annualIncome: number;

    constructor(nameCompany: string, annualIncome: number){
        this.nameCompany = nameCompany;
        this.annualIncome = annualIncome;
    }
}

class EmpresaTecnologia extends Compania {
    constructor(nameCompany: string, annualIncome: number){
        super(nameCompany, annualIncome)
    }

    calculateIncome(): number {
        return this.annualIncome*2 
    }
}

const techCompany1 = new EmpresaTecnologia("Google", 1000)
console.log(techCompany1.calculateIncome());

/// ABSTRACCION/////


/*Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción
para que ambas bebidas oculten su lógica de preparación interna pero
expongan un comportamiento común*/

interface Bebida{
    preparar():void
}

class Cafe implements Bebida{
    preparar(): void {
        console.log('Preparando cafe: calentar agua y echar granos de café molido y dejare reposar. Filtrar y servir');
        
    }
}

class Te implements Bebida {
    preparar(): void {
        console.log('Preparando te: calentar agua y echar hebras de te y dejar reposar. Filtrar y servir');
    }
}

const cafe = new Cafe()
console.log(cafe.preparar());

const te = new Te()
console.log(te.preparar());

/*Ejercicio 2: Clases Abstractas - Sistema de Vehículos
Crea una clase abstracta Vehiculo con una propiedad velocidad y un método
abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa
los modificadores de acceso para controlar la visibilidad de las propiedades*/


abstract class Vehicle{
    constructor(protected speed: number){}

    abstract move(): void
}

export class Car extends Vehicle{
    move(): void{
        console.log(`El auto se mueve a ${this.speed} km/h`);
        }
}


class Bike extends Vehicle{
    move(): void{
        console.log(`La bicicleta se mueve a ${this.speed} km/h`);
    }
}

const car1 = new Car(50)
car1.move()

const bike1 = new Bike(20)
bike1.move()

/*Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
Crea una interfaz Usuario que tenga las propiedades:
• nombre (obligatoria).
• edad (opcional).
• readonly id (solo lectura).
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta
modificar la propiedad id para mostrar cómo se aplican las restricciones de solo
lectura*/

interface User{
    name: string;
    age?: number;
    readonly id: number;
}


//debo respetar el orden de las propiedades y si es "readonly" colocorlo en el constructor
class UserEspecific implements User{

    constructor( public name: string, public readonly id: number, public age?: number){}
}

const user1 = new UserEspecific("Lucia", 1, 25)
console.log(user1.name);
console.log(user1.id);

user1.id = 2
console.log(user1.id);



