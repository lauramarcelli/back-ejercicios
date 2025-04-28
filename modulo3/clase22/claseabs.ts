//ejemplo practico:
//Imaginemos un sistema de gestion de transporte que se mueven de diferente manera
//usaremos clase abstracta para definir el comportamientos general de todos los vehicuos y creraremos una interfaxz "electricos" para los vehiculos cargarse electronicamente

//interfaz para vehiculos electricos
interface Electricos {
    cargarBateria(): void;
}

//clase abstracta para todos los vehiculos
export abstract class Vehiculo {
    constructor(protected tipo: string) {}
     //metodo abstracto
    abstract moverse(): void
    //metodo concreto
    describir(): void {
        console.log(`Este es un vehiculo de tipo ${this.tipo}`);
    }
}

//clase concreta que extiende de la clase abstracta e implementa una interfaz
class AutoElectrico extends Vehiculo implements Electricos{
    constructor (){
        super ("Auto ElECTRICO")
    }

    moverse(): void {
        console.log(`${this.tipo} se mueve en 4 ruedas`);
    }

    cargarBateria(): void {
        console.log(`${this.tipo} se esta cargando`);
    }
}

const tesla = new AutoElectrico()
tesla.moverse()
tesla.cargarBateria()
tesla.describir()