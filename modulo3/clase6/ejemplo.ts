//clase base
class Animal{
    name: string;

    //constructor inicializa la propiedad name
    constructor(name: string){
        this.name = name;
    }

    //metodo que imprime un sonido de animal
    makeSound(): void {
        console.log(`${this.name} hace un sonido`);
    }
}

//clase derivada
class Dog extends Animal{
    breed: string;

    constructor(name: string, breed: string){
    super(name);// llama al constructor de la clase base animal para inicializar 'name'
    this.breed = breed;// inicializa la propiedad 'breed'
    }
    
    //sobreescribe el metodo makesound
    makeSound(): void {
        console.log(`${this.name} ladrando`);
    }

    //nuevo metodo especifico de la subclase Dog
    fetch(): void    {
        console.log(`${this.name} esta buscando la pelota`);
    } 
}

//Instanciar objetos de la clase base y derivada
const animalGenerico = new Animal('Animal Generico');
animalGenerico.makeSound();

const myDog = new Dog('Fido', 'Golden Retriever');
myDog.makeSound();
myDog.fetch();
