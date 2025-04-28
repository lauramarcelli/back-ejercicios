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
