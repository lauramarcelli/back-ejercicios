/*Abstraccion:
Ejercicio 7: Comparación Completa - Sistema de Transporte Público
Diseña un sistema que combine interfaces y clases abstractas para gestionar un
transporte público.
• Crea una clase abstracta Transporte con un método abstracto mover().
• Define dos interfaces:
o Electrico con el método cargarBateria().
o Combustible con el método llenarTanque().
• Implementa dos clases:o AutobusElectrico: Extiende de Transporte e implementa Electrico.
o Taxi: Extiende de Transporte e implementa Combustible.*/


//Interfaz electrico
interface Electrico{
    cargarBateria(): void
}

//interfaz combustible
interface Combustible{
    llenarTanque(): void
}


//Clase abstracta Transporte
abstract class Transporte{
    constructor(protected pasajeros: number){}

    //metodo abstracto deben implementar las subclases
    abstract mover(): void

    //metodo concreto para describir el transporte
    describir(): void{
        console.log(`Este es un transporte de ${this.pasajeros} pasajeros`);
    } 
}

//Clase autobusElectrico que extiende transporte e implementa electrico
class AutobusElectrico extends Transporte implements Electrico{
    mover(): void{
        console.log('El autobus electrico se mueve por la ciudad');
    }
    cargarBateria(): void {
        console.log('El autobus electrico se esta cargando');
    }
}

//clase taxi que extiende Trasnporte e implementa combustible
class Taxi extends Transporte implements Combustible{
    mover(): void{
        console.log('El taxi se mueve por la ciudad');
    }
    llenarTanque(): void {
        console.log('Llenando el tanque del taxi');
    }
}

//Pruebas:
const autobus = new AutobusElectrico(50);
autobus.describir()
autobus.cargarBateria()
autobus.mover()

const taxi = new Taxi(4);
taxi.describir()
taxi.llenarTanque()
taxi.mover()

/*Herencia:
Ejercicio 7: Herencia Múltiple Indirecta y Modificadores de Acceso
Consigna: Define una clase base Negocio con un método protegido operar().
Define otra clase Consultoria que herede de Negocio y sobrescriba el método
operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría*/

class Negocio{
    protected operar(): void{
        console.log('El negocio está operando de forma general');
    }
    //metodo publico para llamar al metodo protegido desde afuera
    public iniciarOperacion(): void {
        this.operar();
    }
}

//clase derivada
class Consultoria extends Negocio{
    protected operar(): void{
        console.log('El negocio de consultoria opera brindando asesoramiento');
    }
    public iniciarOperacion(): void{
        this.operar()
    }
}

//prueba
const miConsultoria = new Consultoria()
miConsultoria.iniciarOperacion()

/*Encapsulamiento. 
7.Ejercicio de Bodega
Diseña una clase Bodega que tenga propiedades privadas para nombre,
direccion, y inventario (un array de objetos con producto y cantidad).
Implementa métodos para agregar productos al inventario, eliminar productos,
y listar el inventario. Si se intenta agregar un producto con una cantidad
negativa, imprime un mensaje informativo*/

class Bodega {
    private _nombre: string
    private _direccion: string
    private _inventario: {producto: string; cantidad: number}[]

    constructor(nombre: string, direccion: string){
        this._nombre = nombre
        this._direccion = direccion
        this._inventario = [] /// inicializa el inventario con un arreglo vacío
    }
    //getter para el nombre
    public get nombre(): string{
        return this._nombre //devuelve el nombre de la bodega
    }
    public agregarProducto(producto: string, cantidad: number): void {
        if(cantidad < 0) {
            console.log('La cantidad no puede ser negativa');
        } else {
            this._inventario.push({producto, cantidad})
            console.log(`Producto ${producto} agregado con cantidad ${cantidad} a la la bodega`);
            
        }
    }

    public eliminarProducto(producto: string): void {
        const index = this._inventario.findIndex(item => item.producto === producto)
        if(index === -1){
            console.log(`El producto ${producto} no está en el inventario`);   
        } else {
            this._inventario.splice(index, 1)
            console.log(`Producto ${producto} eliminado del inventario`);
        }
    }
    public listarInventario(): {producto: string, cantidad: number} [] {
        return this._inventario
    }
}

//Pruebas
const miBodega = new Bodega('Mi Bodega', 'Calle 123'); 
miBodega.agregarProducto('Manzanas', 10);
miBodega.agregarProducto('Bananas', -5);
console.log(`Inventario de ${miBodega.nombre}:`, miBodega.listarInventario());
miBodega.eliminarProducto('Manzanas');
console.log(`Inventario de ${miBodega.nombre}:`, miBodega.listarInventario());


/*Polimorfismo
Ejercicio 7: Herencia y Polimorfismo con Clases Abstractas y Métodos
SobrecargadosCrea una clase abstracta InstrumentoMusical con un método tocar. Crea dos
clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el
instrumento de manera diferente. Además, agrega una sobrecarga del método
tocar en la clase base para permitir tocar con o sin acompañamiento*/

abstract class InstrumentoMusical {
    //METODO ABSTRACTO
    abstract tocar(): void
    abstract tocar(conAcompanamiento: boolean): void
}

class Guitarra extends InstrumentoMusical{
    //sobreescritura del metodo tocar
    tocar(): void
    tocar(conAcompanamiento: boolean): void
    tocar(conAcompanamiento?: unknown): void {
        if(conAcompanamiento){
            console.log('Tocando la guitarra con acompanamiento');
        } else {
            console.log('Tocando la guitarra sin acompanamiento');
        }
    }
}

class Piano extends InstrumentoMusical{
    //sobreescritura del metodo tocar
    tocar(): void
    tocar(conAcompanamiento: boolean): void
    tocar(conAcompanamiento?: unknown): void {
        if(conAcompanamiento){
            console.log('Tocando el piano con acompanamiento');
        } else {
            console.log('Tocando el piano sin acompanamiento');
        }
    }
}

//pruebas
const guitarra = new Guitarra()
guitarra.tocar()
guitarra.tocar(true)

const piano = new Piano()
piano.tocar()
piano.tocar(true)

