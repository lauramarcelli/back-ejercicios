//GETTER

//Definimos un objeto
class Rectangle {
    private _width: number;
    private _height: number;
    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    //Getter para el area del rectangulo
    public get area(): number{
        return this._width * this._height;
    }

    //Getter para obtener la altura
    public get height(): number{
        return this._height
    }

    //Getter para obtener el ancho
    public get width(): number {
        return this._width
    }
}

//Usamos la class Rectangle
const rectangulo = new Rectangle(10, 5);
console.log(rectangulo)

//Acceder a los valores usando los getters
console.log(`Ancho: ${rectangulo.width}`);
console.log(`Area: ${rectangulo.area}`);
console.log(`Altura: ${rectangulo.height}`);


//rectangulo.width = 20;// no se puede asignar porque es una propiedad de solo lectura

//SETTER

//Definimos una class triangulo
class Triangle {
    private _base: number;
    private _height: number;

    constructor() {
        this._base = 0;
        this._height = 0;
    }

    //Setter para la base, con la validacion de numeros
    public set base(value: number){
        if(value>0){
            this._base = value
        } else {
            console.log('la base debe ser mayor a 0');
        }
    }

    public set height(value: number){
        if (value>0){
            this._height = value
        } else {
            console.log('la altura debe ser mayor a 0');
        }
    }

    //Metodo para calcular el area del triangulo
    public calculateArea(): number {
        return (this._base * this._height)/2
    }
}

//Usamos la clase Triangulo
const triangulo = new Triangle()

//Usamos los setters para establecer nuevos valores
triangulo.base = 10
triangulo.height = 5

//Calculamos el area
console.log(`El area del triangulo es ${triangulo.calculateArea()}`);

//Probamos con numeros no validos
triangulo.base = -10
triangulo.height = -5


//POLIMORFISMO
//Clase Base
abstract class Pay {
    abstract processPay(amount: number): void;
}

//Clase derivada que va a tener un comportamiento especifico
class PayWtihCard extends Pay {
    processPay(amount: number): void {
        console.log(`Pago de $${amount} con tarjeta de crédito`);
}
}
class PayWithCash extends Pay {
    processPay(amount: number): void {
        console.log(`Pago de $${amount} con efectivo`);
    }
}

class PayWithTransfer extends Pay {
    processPay(amount: number): void {
        console.log(`Pago de $${amount} procesado por transferencia bancaria`);
    }
}

//Usamos del polimorfismo
const procesar = (pay: Pay, amount: number) => {
    pay.processPay(amount);
}

const formaDePago1 = new PayWtihCard();
const formaDePago2 = new PayWithCash();
const formaDePago3 = new PayWithTransfer();

procesar(formaDePago1, 100)
procesar(formaDePago2, 200)
procesar(formaDePago3, 300)